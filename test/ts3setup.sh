#!/bin/sh

#data=$(dirname $(dirname $(readlink -f $0)))/teamspeak3-server_linux_amd64/
data=$PWD
echo "[setup] $data"
LOCAL_DB_FILE="$data/ts3server.sqlitedb"
LOCAL_PID_FILE="$data/ts3server.pid"
#If server is running, stop it
if [ -f "$LOCAL_PID_FILE" ]; then
  sh $data/ts3server_startscript.sh stop
  sleep 5s
  #Delete the current database if present
  if [ -f "$LOCAL_DB_FILE" ]; then
    rm $data/ts3server.sqlitedb
  fi
fi
sh $data/ts3server_startscript.sh start 2> ts3.log
tail -f ts3.log --pid=$$ &
sleep 5s

maindir=$(readlink -f $data/../)

pw=$(cat ts3.log | grep 'password= "[a-zA-Z0-9]*"' -o | grep -o "\"[a-zA-Z0-9]*\"")

echo "[setup] got pw: $pw"

cp $maindir/testconfig.example $maindir/testconfig.js
sed "s/\"###PASSWORD###\"/$pw/g" -i $maindir/testconfig.js
sed "s/server:null/server:'0'/g" -i $maindir/testconfig.js
