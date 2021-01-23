# Motorsport SofaScore Clone
A clone of the "Motorsport" section from [SofaScore](https://www.sofascore.com/motorsport) app written in React and ASP.NET
## Table of Contents
- [Description](#description)
- [Tech/Framework Used](#techframework-used)
- [How To Run](#How-to-run)

## Description

I wrote an API for this application using ASP.NET Web Api together with SQL Server 2019 database.
The application does not have registration and login functionality. I mainly focused on the look and feel of the original app's behavior.

![App demonstration](https://github.com/vavelysh/MotoApp/blob/master/readme-resource/image.png)
*App demonstration*

The application uses random results limited by the composition of players for a given season.

![Work App Demo](https://github.com/vavelysh/MotoApp/blob/master/readme-resource/demo.gif)
*Work App Demo*


## Tech/Framework Used
* React (create-react-app CLI)
	* react-router-dom
	* redux
	* styled-components
	* react-query
	* axios
* ASP.NET Web Api
	* Entity Framework Core 5
* Microsoft SQL Server 2019


## How to run
This project requires [docker](https://docs.docker.com/engine/install) and [docker-compose](https://docs.docker.com/compose/install) installed.
The containers will serve assets on production using up an nginx server.

Clone the repository to a directory of your choosing

```sh
$ git clone https://github.com/vavelysh/Motorsport-App.git
```
Build containers

```sh
$ docker-compose build
```
Start containers

```sh
$ docker-compose up
```

After building, the application will be available at http://localhost:8787

