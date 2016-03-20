const list=require("./list.js");

function groups(call,sid,cl) {
  // TODO: Add all functions
  this.list=new list(call,{"servergrouplist":"groups"},this,cl,sid);
}

module.exports=groups;
