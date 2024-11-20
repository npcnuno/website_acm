FROM ubuntu:latest
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y sqlite3 libsqlite3-dev
RUN /usr/bin/sqlite3 /backend/db/dev.db
CMD /bin/bash
