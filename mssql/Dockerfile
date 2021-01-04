FROM mcr.microsoft.com/mssql/server
USER root
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN chmod +x /usr/src/app/import-data.sh

ENV ACCEPT_EULA Y
ENV SA_PASSWORD 1Secure@Password1

CMD /bin/bash ./docker-entrypoint.sh
