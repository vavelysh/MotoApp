FROM mcr.microsoft.com/mssql/server
USER root
RUN apt-get update && apt-get install -y dos2unix
WORKDIR /usr/src/app
COPY . .
RUN dos2unix /usr/src/app/import-data.sh /usr/src/app/docker-entrypoint.sh
RUN chmod +x /usr/src/app/import-data.sh
ENV ACCEPT_EULA Y
ENV SA_PASSWORD 1Secure@Password1
USER mssql
ENTRYPOINT /bin/bash ./docker-entrypoint.sh
