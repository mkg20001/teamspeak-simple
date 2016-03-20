const config=require("../testconfig.js");
const cc=require("../lib");
describe("teamspeak-simple",function() {
  var sq;
  it("should connect",function(done) {
    new cc(config.host,config.login,function(e,c) {
      sq=c;
      done(e);
    });
  });
  describe("server",function() {
    var s;
    it("should get server object", function(done) {
      sq.servers.getId(config.server,function(e,serv) {
        s=serv;
        done(e);
      });
    });
  });
});
