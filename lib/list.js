
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
          var r={};
          obj[w.var]=resp;
          resp.map(function(i) {
            r[i[w.id]]=i;
          });
          obj[w.var+"byId"]=r;
          doWork(c);
        }
      });
    } else {
      if (errs.length) {
        c(errs);
      } else {
        c();
      }
    }
  }
  function refresh(c) {
    work=[];errs=[];
    var r;
    for (var p in lists) {
      r=lists[p];
      r.var=p;
      work.push(r);
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
