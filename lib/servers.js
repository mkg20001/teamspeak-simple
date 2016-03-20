const list=require("./list.js");

function servers(call,cl) {
  // TODO: Add all functions
  this.list=new list(call,{"servers":{cmd:"serverlist",id:"virtualserver_id"}},this,cl);
}

module.exports=servers;
