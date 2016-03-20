const groups=require("./groups.js");
const channels=require("./channels.js");
const users=require("./users.js");

function server(call,sid,cl) {
  // TODO: Add all functions
  const self=this;
  this.channels=new channels(function(err) {
    if (err) {
      call(err);
    } else {
      self.groups=new groups(function(err) {
        if (err) {
          call(err);
        } else {
          self.users=new users(function(err) {
            if (err) {
              call(err);
            } else {
              call(err,self);
            }
          },sid,cl);
        }
      },sid,cl);
    }
  },sid,cl);
  this.refresh=function(cb) {
    self.channels.r(function(e) {
      if (e) return cb(e);
      self.groups.r(cb);
    });
  };
  this.r=this.refresh;
}

module.exports=server;
