const list=require("./list.js");
const groups=require("./groups.js");
const channels=require("./channels.js");

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
          call(self);
        }
      });
    }
  });
  //this.list=new list(call,{"channellist":"channels"},this,cl,sid);
}

module.exports=server;
