FROM mcr.microsoft.com/mssql/server:2019-latest
USER root
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV ACCEPT_EULA Y
ENV SA_PASSWORD 1Secure@Password1
COPY . /usr/src/app
RUN chmod +x /usr/src/app/import-data.sh
CMD /bin/bash ./docker-entrypoint.sh
