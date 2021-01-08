#!/bin/sh
sleep 30s
echo "Create schemas..."
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 1Secure@Password1 -d master -i create-database.sql
echo "Fill data..."
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 1Secure@Password1 -d master -i fill-db.sql
echo "Application run of http://localhost:8787"
