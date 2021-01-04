#!/bin/sh

# shellcheck disable=SC2039
# shellcheck disable=SC2034
echo "SIEMAAA"
for i in {1..50};
do
    /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 1Secure@Password1 -d master -i setup.sql
    if [ $? -eq 0 ]
    then
        echo "setup.sql completed"
        break
    else
        echo "not ready yet..."
        sleep 1
    fi
done
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Nations in "./csv/MotorsportDB.dbo.Nations.csv" -c -t',' -S localhost -U sa -P 1Secure@Password1
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Drivers in "./csv/MotorsportDB.dbo.Drivers.csv" -c -t',' -S localhost -U sa -P 1Secure@Password1
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Teams in "./csv/MotorsportDB.dbo.Teams.csv" -c -t',' -S localhost -U sa -P 1Secure@Password1
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Categories in "./csv/MotorsportDB.dbo.Categories.csv" -c -t',' -S localhost -U sa -P 1Secure@Password1
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Seasons in "./csv/MotorsportDB.dbo.Seasons.csv" -c -t',' -S localhost -U sa -P 1Secure@Password1
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.SeasonCrafts in "./csv/MotorsportDB.dbo.SeasonCrafts.csv" -c -t',' -S localhost -U sa -P 1Secure@Password1
