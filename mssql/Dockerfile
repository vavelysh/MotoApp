FROM mcr.microsoft.com/mssql/server
WORKDIR /usr/src/msql
ENV SA_PASSWORD Adi12345!!
ENV ACCEPT_EULA Y
COPY . ./
USER root
RUN chmod +x /usr/src/msql/import-data.sh
CMD /bin/bash ./docker-entrypoint.sh
