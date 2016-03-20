const TSClient = require("./client.js");
const servers=require("./servers.js");

function client(ip,logindata,call) {
  const cl=new TSClient(ip);
  const self=this;
  cl.send("login",logindata,function(err) {
    if (err) {
      call(err);
    } else {
      self.servers=new servers(function(errs) {
        if (errs) {
          call(errs);
        } else {
          call(null,self);
        }
      },cl);
    }
  });
  this.send=cl.send;
}
module.exports=client;
