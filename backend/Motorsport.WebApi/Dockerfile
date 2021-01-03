# Stage 1: Define base image that will be used for production
FROM mcr.microsoft.com/dotnet/sdk AS base
WORKDIR /app
# Stage 2: Build and publish the code
FROM mcr.microsoft.com/dotnet/framework/samples:aspnetapp AS build
WORKDIR /app
COPY Motorsport.WebApi.csproj ./
RUN dotnet restore
COPY . .
RUN dotnet build -c Release
FROM build AS publish
RUN dotnet publish -c Release -o /publish
# Stage 3: Build and publish the code
FROM base AS final
WORKDIR /app
COPY --from=publish /publish .
ENTRYPOINT ["dotnet","Motorsport.WebApi.dll"]
