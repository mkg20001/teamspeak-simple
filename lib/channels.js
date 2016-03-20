const list=require("./list.js");

function channels(call,sid,cl) {
  // TODO: Add all functions
  this.list=new list(call,{"channels":{cmd:"channellist"}},this,cl,sid);
}

module.exports=channels;
