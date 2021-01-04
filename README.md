# Motorsport SofaScore Clone
A clone of the "Motorsport" section of a [SofaScore](https://www.sofascore.com/motorsport) app written in React and .NET 5
## Table of Contents
- [Description](#description)
- [Motivation](#motivation)
- [Tech/Framework Used](#techframework-used)
- [How To Run](#How-to-run)

## Description

I wrote an API for this application using ASP.NET Web Api together with SQL Server 2019 database.
The application does not have registration and login functionality. I mainly focused on the look and feel of the original app's behavior.

![App Screen Shot](https://github.com/JL978/spotify-clone-client/blob/master/demo/FrontPage.png)
*The main screen (non-authenicated) of the app*

Like the official app, if a user is not authenticated, they can still browse and look up different playlists, albums, artists and users. Non authenticated users cannot control the player and go to certain protected routes - if they tried to navigate to these routes, a tooltip pops up prompting login.

![App Demo](https://github.com/JL978/spotify-clone-client/blob/master/readme-resource/siema.gif)
*Non-authenticated app demonstration*

If a user login to a premium account (due to the limitation of the available API, free accounts cannot do much), user can access certain routes to their own playlists, saved items, etc. and use the app as a remote control player to any playing official (no direct streaming is available through the API)

![Authenticated app demonstration](https://github.com/JL978/spotify-clone-client/blob/master/demo/Authed.gif)
*Authenticated app demonstration*

![Remote player demonstration](https://github.com/JL978/spotify-clone-client/blob/master/demo/RemotePlay.gif)
*Remote player demonstration*

## Motivation
I created this clone to learn the React ecosystem. I decided to choose styled-components because the original application uses it and I feel very comfortable in it.
Using react-query in this application was unnecessary, but it gave me a chance to get to know one of the best libraries in the ecosystem.

I could use a ready-made API, but I preferred to create my own. I used the Code First approach with EF 5.
## Tech/Framework Used
* React (create-react-app CLI)
	* react-router-dom
	* redux
		- [ ] Context API + useReducer instead of redux
	* styled-components
	* react-query
	* axios
* ASP.NET Web Api
	* Entity Framework Core 5
* Microsoft SQL Server 2019


## How to run
This project requires [docker](https://docs.docker.com/engine/install) installed.
The containers will build a production version of the project.

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

