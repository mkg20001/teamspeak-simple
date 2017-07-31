"use strict"

//TODO: better docs

const defaults = {
  host: "localhost",
  port: 10011,
  flood: {
    //TODO: add flood increase stuff
  },
  forking: {
    limit: 20,
    auto_join: false,
    standalone_master: true
  },
  login: "guest"
}

const merge = require("merge-recursive")
const clone = require("clone")
const Instance = require("./instance")
const series = require("async/series")

function TeamSpeakSimple(_opt) {
  const opt = merge(clone(defaults), _opt)
  const self = this

  const master = self.master = new Instance(opt)

  function floodSetting() {
    //increase the flood ban limit to the given default
    //TODO: add
  }

  self.start = cb => series([
    master.start,
    floodSetting
  ], cb)
}

module.exports = TeamSpeakSimple
