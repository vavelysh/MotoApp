
FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80


FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS build
WORKDIR /app
COPY Motorsport.WebApi.csproj ./
RUN dotnet restore
COPY . .
RUN dotnet build -c Release
FROM build AS publish
RUN dotnet publish -c Release -o /publish


FROM base AS final
WORKDIR /app
COPY --from=publish /publish .
ENTRYPOINT ["dotnet","Motorsport.WebApi.dll"]
