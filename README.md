# teamspeak-simple
TeamSpeak-Simple is a simple TS3 Query for NodeJS

#### Connect:
```javascript
const query=require("teamspeak-simple");
const cl=new query("127.0.0.1",{client_login_name: "###USERNAME###", client_login_password: "###PASSWORD###"},function(err,cl) {
  //Place your code here
});
```
#### List all Servers:
```javascript
console.log(cl.servers);
```

#### List all Users on a Server:
```javascript
cl.getId(sid,function(err,server) {
  console.log(server.users.users);
});
```

#### Move Users:
```javascript
cl.getId(sid,function(err,server) {
  server.users.getId(clid,function(err,user) {
    user.move(server.channels.channels[0].cid);
  });
});
```

#### Kick/Ban Users:
```javascript
cl.getId(sid,function(err,server) {
  server.users.getId(clid,function(err,user) {
    user.kick("Kicked by TeamSpeak-Simple");
    user.ban(60,"Banned by TeamSpeak-Simple");
  });
});
```

### [View the API](https://github.com/mkg20001/teamspeak-simple/blob/master/API.md)
