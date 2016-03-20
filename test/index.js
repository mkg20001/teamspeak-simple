const config=require("../testconfig.js");
const cc=require("../lib");
describe("teamspeak-simple",function() {
  var sq;
  it("connect",function(done) {
    new cc(config.host,config.login,function(e,c) {
      sq=c;
      done(e);
    });
  });
  describe("servers",function() {
    var s;
    it("create(name,cb)",function(done) {
      sq.servers.create("Test",function(err,serv,resp) {
        config.server=resp.sid;
        done(err);
      });
    });
    it("servers",function() {
      if (!sq.servers.servers) throw "Property Missing";
    });
    it("serversbyId",function() {
      if (!sq.servers.serversbyId) throw "Property Missing";
    });
    it("stop(sid,cb)",function(done) {
      sq.servers.stop(config.server,done);
    });
    it("start(sid,cb)",function(done) {
      sq.servers.start(config.server,done);
    });
    it("restart(sid,cb)",function(done) {
      sq.servers.restart(config.server,done);
    });
    it("state(sid,state)",function() {
      if (!sq.servers.state(config.server)) throw "Fail";
    });
    it("getId(id)", function() {
      if (!sq.servers.getId(config.server)) throw "Fail";
    });
    it("getId(id,cb)", function(done) {
      sq.servers.getId(config.server,function(e,serv) {
        s=serv;
        done(e);
      });
    });
    describe("server", function() {
      describe("server.users", function() {
        it("users", function() {
          if (!s.users.users) throw "Property Missing";
        });
        it("usersbyId", function() {
          if (!s.users.usersbyId) throw "Property Missing";
        });
        it("getId(id)", function() {
          if (!s.users.getId(s.users.users[0].clid)) throw "Fail";
        });
        it("getId(id,cb)", function(done) {
          s.users.getId(s.users.users[0].clid,function(e,r) {
            done(e);
          });
        });
      });
      describe("server.channels", function() {
        it("channels", function() {
          if (!s.channels.channels) throw "Property Missing";
        });
        it("channelsbyId", function() {
          if (!s.channels.channelsbyId) throw "Property Missing";
        });
        it("getId(id)", function() {
          if (!s.channels.getId(s.channels.channels[0].cid)) throw "Fail";
        });
        it("getId(id,cb)", function(done) {
          s.channels.getId(s.channels.channels[0].uid,function(e,r) {
            done(e);
          });
        });
      });
      describe("server.groups", function() {
        it("groups", function() {
          if (!s.groups.groups) throw "Property Missing";
        });
        it("groupsbyId", function() {
          if (!s.groups.groupsbyId) throw "Property Missing";
        });
        it("getId(id)", function() {
          if (!s.groups.getId(s.groups.groups[0].sgid)) throw "Fail";
        });
        it("getId(id,cb)", function(done) {
          s.groups.getId(s.groups.groups[0].uid,function(e,r) {
            done(e);
          });
        });
      });
      describe("server.delete", function() {
        it("delete(sid,cb)",function(done) {
          sq.servers.delete(config.server,done);
        });
      });
    });
  });
});
