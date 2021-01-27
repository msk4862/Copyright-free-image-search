<div align="center">
    <h1>NCI</h1>
    <p>
         <b>Tired of searching images from diffrent websites? Try using NCI which searches copyright free images from across the platforms like pixabay, unsplash, etc. and shows you the results in a single platform.</b>
    </p>
      <img src="https://travis-ci.org/msk4862/Copyright-free-image-search.svg?branch=master" width="90">
      <img src="https://img.shields.io/github/license/msk4862/Copyright-free-image-search?style=flat-square" width="80">
      <img src="https://img.shields.io/github/v/release/msk4862/Copyright-free-image-search?style=flat-square" width="85">
      <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" width="130">
      <img src="https://forthebadge.com/images/badges/powered-by-responsibility.svg" width="170">
      </br>
      <img src="https://forthebadge.com/images/badges/built-with-love.svg" width="180">
</div>

## Tools

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces. 
- [Node](https://nodejs.org/en/)- Executes JavaScript code outside of a browser.
- [Express](https://expressjs.com/) - Node.js web application framework.
- [GreenSock](https://greensock.com/) - A JavaScript animation library.
- [React Testing Library](https://github.com/testing-library/react-testing-library) - Testing library for React.

## Running Locally
If you wish to run local instancie of NCI refer to this guide!

### 1. Configuration
All of the configuration is handled via environmental variables (`.env` file).

#### Frontend Options
> Go to `client-side` directory and create `.env` file if you want to set any of the below environmental variable.

| Option | Type | Description |
| - | - | - |
| `REACT_APP_DEVELOPMENT_API_BASE_URL` | Required | This variable specifies the development api url of backend `e.g. http:\\localhost:8000` |
| `REACT_APP_ENV` | Optional | This variable specifies whether you are running in `development` or `production` environment, if not set it defaults to `development` |
| `REACT_APP_PRODUCTION_API_BASE_URL` | Optional | This variable specifies production api url of backend |


#### Backend Options
> Go to `server-side` directory and create `.env` file if you want to set any of the below environmental variable.

| Option | Type | Description |
| - | - | - |
| `PORT` | Optional | This variable specify application port to run backend server, if not set it defaults to `8000` |
| `NCI_PIXABAY_KEY` | Optional | Pixabay [API key](https://pixabay.com/api/docs/) |
| `NCI_PEXELS_KEY` | Optional | Pexels [API key](https://www.pexels.com/api/new/) |
| `NCI_UNSPLASH_KEY` | Optional | Unsplash [API key](https://unsplash.com/oauth/applications) |


### 2. Running client side
To run frontend please use following commands executed in project directory:
```sh
cd client-side
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### 3. Running server side
To run backend please use following commands executed in project directory:
```sh
cd server-side
npm start
```
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


## Running Using Docker 
Execute following command in project directory: 
```sh
docker-compose up
```
It will run both backend and frontend. 


## Show Support
Give this project a 🌟 to show your support 😃😃 

## Contributing
All kind of contributions, issues and feature requests are welcome ❤️.
