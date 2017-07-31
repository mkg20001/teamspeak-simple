"use strict"

const Query = require("teamspeak-query-client")
const series = require("async/series")

function QueryInstance(opt) {
  const self = this
  let q = self.query = new Query()
  self.start = cb => series([
    cb => q.connect(opt, cb),
    cb => opt.login == "guest" ? cb() : q.login(opt.login.user, opt.login.pass, cb)
  ], cb)
  self.stop = cb => {
    q.disconnect()
    process.nextTick(cb)
  }
}

module.exports = QueryInstance
