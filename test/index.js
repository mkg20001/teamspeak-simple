const config=require("../testconfig.js");
const cc=require("../lib");
describe("teamspeak-simple",function() {
  var s;
  it("should connect",function(done) {
    new cc(config.host,config.login,function(e,c) {
      s=c;
      done(e);
    });
  });
});
