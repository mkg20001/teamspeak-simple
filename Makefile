tests: ts3stop ts3server
	mocha
	make -C ts3stop
ts3stop:
	if [ -d teamspeak3-server_linux_amd64 ]; then cd teamspeak3-server_linux_amd64/;sh ./ts3server_startscript.sh stop;cd ..;rm -rvf teamspeak3-server_linux_amd64; fi
ts3server:
	if [ -d teamspeak3-server_linux_amd64 ]; then rm -rvf teamspeak3-server_linux_amd64; fi
	if ! [ -f ts ]; then wget http://dl.4players.de/ts/releases/3.0.13.6/teamspeak3-server_linux_amd64-3.0.13.6.tar.bz2 -O ts; fi
	tar -xvjf ts
	cd teamspeak3-server_linux_amd64/;bash ../test/ts3setup.sh
