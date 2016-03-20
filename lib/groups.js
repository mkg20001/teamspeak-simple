const list=require("./list.js");

function groups(call,sid,cl) {
  // TODO: Add all functions
  this.list=new list(call,{"groups":{cmd:"servergrouplist",id:"sgid"}},this,cl,sid);
}

module.exports=groups;
