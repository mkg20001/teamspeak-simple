const list=require("./list.js");

function users(call,sid,cl) {
  // TODO: Add all functions
  this.list=new list(call,{"users":{cmd:"clientlist",id:"clid"}},this,cl,sid);
}

module.exports=users;
