
function list(c,lists,obj,cl,serv) {
  //lists {"cmd":"output var"}
  var work=[];
  var errs=[];
  function doWork(c) {
    var w=work.pop();
    if (w) {
      cl.send(w.cmd,{server:serv},function(err,resp) {
        if (err) {
          errs.push(err);
          doWork(c);
        } else {
          obj[w.var]=resp;
          doWork(c);
        }
      });
    } else {
      c(errs);
    }
  }
  function refresh(c) {
    work=[];errs=[];
    for (var p in lists) {
      work.push({"cmd":p,"var":lists[p]});
    }
    doWork(c);
  }
  this.refresh=refresh;
  this.r=refresh;
  obj.refresh=refresh;
  obj.r=refresh;
  refresh(c);
}
module.exports=list;
