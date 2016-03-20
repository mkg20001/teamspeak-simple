const list=require("./list.js");
const server=require("./server.js");

function servers(call,cl) {
  // TODO: Add all functions
  const self=this;
  this.list=new list(call,{"servers":{cmd:"serverlist",id:"virtualserver_id"}},this,cl);
  this.state=function(id,state) {
    if (self.serversbyId[id]) {
      var s=self.serversbyId[id].virtualserver_status;
      if (state) {
        return (s=="state");
      } else {
        return s;
      }
    } else {
      throw "ENOTFOUND";
    }
  };
  this.start=function(id,cb) {
    if (self.serversbyId[id]) {
      if (self.state(id,"online")) return cb();
      cl.send("serverstart",{sid:id},function(err) {
        if (err) {
          cb(err);
        } else {
          self.refresh(cb);
        }
      });
    } else {
      cb("ENOTFOUND");
    }
  };
  this.stop=function(id,cb) {
    if (self.serversbyId[id]) {
      if (self.state(id,"offline")) return cb();
      cl.send("serverstop",{sid:id},function(err) {
        if (err) {
          cb(err);
        } else {
          self.refresh(cb);
        }
      });
    } else {
      cb("ENOTFOUND");
    }
  };
  this.restart=function(id,cb) {
    if (self.serversbyId[id]) {
      self.stop(id, function(err) {
        if (err) {
          cb(err);
        } else {
          self.start(id,cb);
        }
      });
    } else {
      cb("ENOTFOUND");
    }
  };
  this.create=function(name,prop,cb) {
    var p;
    if (cb) {p=prop;p.virtualserver_name=name;} else p={virtualserver_name:name};
    if (!cb) cb=prop;
    cl.send("servercreate",prop,function(err,resp) {
      if (err) return cb(err);
      self.refresh(function(err) {
        self.getId(resp.sid,function(err,serv) {
          cb(err,serv,resp);
        });
      });
    });
  };
  this.delete=function(sid,cb) {
    self.stop(sid,function(err) {
      if (err) {
        cb(err);
      } else {
        cl.send("serverdelete",{sid:sid},cb);
      }
    });
  };
  this.getId=function(id,cb) {
    if (cb) {
      if (self.serversbyId[id]) {
        new server(cb,id,cl);
      } else {
        cb("ENOTFOUND");
      }
    } else {
      return self.serversbyId[id];
    }
  };
}

module.exports=servers;
