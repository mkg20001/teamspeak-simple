> This is currently an idea

### Info
 - callback (cb) is called with error parameter and additional parameters if specified
 - If no return value is specified the function requires a callback

### client
 - **send(command,arguments,callback)** - Send Commands http://media.teamspeak.com/ts3_literature/TeamSpeak%203%20Server%20Query%20Manual.pdf

### Basic properties (in every Object expect client)
 - **refresh(cb)** - Refresh values of object

### client.servers
 - **start(sid,cb)** - Start SID if not running
 - **stop(sid,cb)** - Stop SID if running
 - **state(sid[,state],cb)** - Returns state of SID or Boolean
 - **create(name[,properties],cb)** - Create Server (Server Object is passed to callback)
 - **delete(sid,cb)** - Deletes a Server
 - **get(sid[,cb])** - Returns the server by SID (no callback) or a server object (with callback)
 - **servers** - Servers list

### server
- **users** - all users online
- **channels** - all channels
- **groups** - all groups

### server.users
 - **getDB(id[,cb])** - Returns the user by its database id (no callback) or a user object (with callback)
 - **users** - all users

### server.channels
 - **getID(id[,cb])**

### user
 - **move(channel,cb)** - Moves the user to the specified channel (can be channel object or channel id)
 - **kick([reason,]cb)** - Kicks the User
 - **ban(time[,reason],cb)** - Bans the User

### group
 - **perms** - Permissions of the Group (perm object)

### perm
 - **set(perm[,val,cb])** - Set Permission or revoke it by setting it to null (If no value is specified current value is returned)
 - **perms** - all permissions
