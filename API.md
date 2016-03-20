> This is currently an idea

### Info
 - callback (cb) is called with error parameter
 - If no return value is specified the function requires a callback

### client
 - **.send(command,arguments,callback)** - Send Commands http://media.teamspeak.com/ts3_literature/TeamSpeak%203%20Server%20Query%20Manual.pdf

### Basic properties (in every Object expect client)
 - **refresh(cb)** - Refresh values of object

### client.servers
 - **start(sid,cb)** - Start SID if not running
 - **stop(sid,cb)** - Stop SID if running
 - **state(sid[,state],cb)** - Returns state of SID or Boolean
 - **create(name[,properties],cb)** - Create Server (Server Object is passed to callback)
 - **delete(sid)** - Deletes a Server
 - **get(sid)** - Server object is passed to callback
 - **servers** - Servers list

### server
- **users** - all users online
- **channels** - all channels
- **groups** - all groups

### server.users
 - **getDB(id)** - Returns the user by its database id (no callback)

### user
 - **move(channel)** - Moves the user to the specified channel (can be channel object or channel id)
 - **kick([reason])** - Kicks the User
 - **ban(time[,reason])** - Bans the User

### group
> WIP

### permission
> WIP
