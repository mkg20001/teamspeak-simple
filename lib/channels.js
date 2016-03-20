const list=require("./list.js");

function channels(call,sid,cl) {
  // TODO: Add all functions
  this.list=new list(call,{"channellist":"channels"},this,cl,sid);
}

module.exports=channels;
