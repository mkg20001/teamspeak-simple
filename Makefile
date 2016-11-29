VER=13.6
tests: ts3stop ts3server
	mocha
	make -C ts3stop
ts3stop:
	if [ -d teamspeak3-server_linux_amd64 ]; then cd teamspeak3-server_linux_amd64/;sh ./ts3server_startscript.sh stop;cd ..;rm -rvf teamspeak3-server_linux_amd64; fi
ts3server:
	if [ -d teamspeak3-server_linux_amd64 ]; then rm -rvf teamspeak3-server_linux_amd64; fi
	if ! [ -f ts$(VER) ]; then wget http://dl.4players.de/ts/releases/3.0.$(VER)/teamspeak3-server_linux_amd64-3.0.$(VER).tar.bz2 -O ts$(VER); fi
	tar -xvjf ts$(VER)
	cd teamspeak3-server_linux_amd64/;bash ../test/ts3setup.sh
