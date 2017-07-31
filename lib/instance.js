"use strict"

const debug = require("debug")
const log = debug("teamspeak-simple:instance")

const Query = require("teamspeak-query-client")
const series = require("async/series")

function QueryInstance(opt, conf) {
  const self = this
  let q = self.query = new Query()
  if (!conf) conf = {}
  log("creating new instance for %s:%s", opt.host, opt.port)
  self.start = cb => series([
    cb => log("connecting", opt.host, opt.port, conf.server, cb()),
    cb => q.connect(opt, cb),
    cb => opt.login == "guest" ? cb() : q.login(opt.login.user, opt.login.pass, cb),
    cb => q.cmd("clientupdate", {
      client_nickname: opt.nickname
    }, cb),
    cb => {
      if (conf.server) return q.cmd("use", conf.server, cb)
      cb()
    },
    cb => {
      log("instance ready", conf)
      cb()
    }
  ], cb)
  self.stop = cb => {
    log("disconnecting", conf)
    q.disconnect()
    process.nextTick(cb)
  }
}

module.exports = QueryInstance
