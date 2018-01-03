'use strict'

function InstanceManager (opt) {
  const self = this

  let master
  let byServer = {}
  let instances = []

  self.clearUnused = () => {

  }

  self.add = instance => {
    instances.push(instance)
    if (instance.conf.master) master = instance
    if (instance.conf.server) {
      if (!byServer[instance.conf.server]) byServer[instance.conf.server] = []
      byServer[instance.conf.server].push(instance)
    }
    self.clearUnused()
  }
}

module.exports = InstanceManager
