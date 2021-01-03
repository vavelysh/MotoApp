for i in {1..50};
do
    /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Adi123 -d master -i setup.sql
    if [ $? -eq 0 ]
    then
        echo "setup.sql completed"
        break
    else
        echo "not ready yet..."
        sleep 1
    fi
done

/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Nations in "/usr/src/app/csv/MotorsportDB.dbo.Nations.csv" -c -t',' -S localhost -U sa -P Adi123
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Drivers in "/usr/src/app/csv/MotorsportDB.dbo.Drivers.csv" -c -t',' -S localhost -U sa -P Adi123
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Teams in "/usr/src/app/csv/MotorsportDB.dbo.Teams.csv" -c -t',' -S localhost -U sa -P Adi123
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Categories in "/usr/src/app/csv/MotorsportDB.dbo.Categories.csv" -c -t',' -S localhost -U sa -P Adi123
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.Seasons in "/usr/src/app/csv/MotorsportDB.dbo.Seasons.csv" -c -t',' -S localhost -U sa -P Adi123
/opt/mssql-tools/bin/bcp MotorsportDB.dbo.SeasonCrafts in "/usr/src/app/csv/MotorsportDB.dbo.SeasonCrafts.csv" -c -t',' -S localhost -U sa -P Adi123
