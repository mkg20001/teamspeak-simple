const list=require("./list.js");
const server=require("./server.js");

function servers(call,cl) {
  // TODO: Add all functions
  this.list=new list(call,{"servers":{cmd:"serverlist",id:"virtualserver_id"}},this,cl);
  this.getId=function(id,cb) {
    if (cb) {
      if (this.serversbyId[id]) {
        new server(cb,id,cl);
      } else {
        cb("ENOTFOUND");
      }
    } else {
      return this.serversbyId[id];
    }
  };
}

module.exports=servers;
