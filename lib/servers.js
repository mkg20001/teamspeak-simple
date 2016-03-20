const list=require("./list.js");

function servers(call,cl) {
  this.list=new list(call,{"serverlist":"servers"},this,cl);
}

module.exports=servers;
