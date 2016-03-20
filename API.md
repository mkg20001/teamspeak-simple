### Info
 - callback (cb) is called with error parameter and additional parameters if specified
 - If no return value is specified the function requires a callback

### client
 - **send(command,arguments,callback)** - Send Commands http://media.teamspeak.com/ts3_literature/TeamSpeak%203%20Server%20Query%20Manual.pdf
 - **servers** - servers object

### Basic properties (in every Object expect client)
 - **refresh(cb)** - Refresh values of object

### client.servers
 - TODO **start(sid,cb)** - Start SID if not running
 - TODO **stop(sid,cb)** - Stop SID if running
 - TODO **state(sid[,state])** - Returns state of SID or Boolean
 - TODO **create(name[,properties],cb)** - Create Server (Server Object is passed to callback)
 - TODO **delete(sid,cb)** - Deletes a Server
 - **get(sid[,cb])** - Returns the server by SID (no callback) or a server object (with callback)
 - **servers** - Servers list

### server
- **users** - users object
- **channels** - channels object
- **groups** - groups object

### server.users
 - TODO **getDB(id[,cb])** - Returns the user by its database id (no callback) or a user object (with callback)
 - TODO **getID(id[,cb])** - Returns the user by ID (no callback) or a user object (with callback)
 - **users** - all users online

### server.channels
 - TODO **getID(id[,cb])** - Returns the channel by ID (no callback) or a channel object (with callback)
 - **channels** - all channels

### server.groups
 - TODO **getID(id[,cb])** - Returns the channel by ID (no callback) or a channel object (with callback)
 - **groups** - all groups

### user
 - TODO **move(channel,cb)** - Moves the user to the specified channel (can be channel object or channel id)
 - TODO **kick([reason,]cb)** - Kicks the User
 - TODO **ban(time[,reason],cb)** - Bans the User

### channel
 - TODO **rename(name,cb)** - Renames the channel
 - TODO **delete(cb)** - Deletes the channel
 - TODO **move(pos,cb)** - Moves the channel

### group
 - TODO **rename(name,cb)** - Renames the group
 - TODO **delete(cb)** - Deletes the group
 - TODO **copy(dst,cb)** - Copies the group
 - TODO **perms** - Permissions of the Group (perm object)

### perm
 - TODO **set(perm[,val,cb])** - Set Permission or revoke it by setting it to null (If no value is specified current value is returned)
 - TODO **perms** - all permissions
