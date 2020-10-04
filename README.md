<div align="center">
    <h1>NCI</h1>
    <p>
         <b>Tired of searching images from diffrent websites? Try using NCI which searches copyright free images from across the platforms like pixabay, unsplash, etc. and shows you the results in a single platform.</b>
    </p>
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

## How NCI handle services

Some of services that we are using require to register an app to get the API key.
When you are working on parts of the app which don't require access to all of the apis,
you can supply only one or even none of the keys.
If you want to contribute to the project we would suggest setting up only Pixabay key.

## Running Locally

If you wish to run local instancie of NCI reefer to this guide!

### 1. Configuration
All of the configuration is handled via environmental variables.

Option | Type | Description
- | - | -
`NODE_ENV` | Recommended | You would generally want to set if for `development` as it separate backend and frontend to different ports.
`NCI_BACKEND_PORT` | Optional | This variable specify application port of backend server, if not set it defaults to `8000`
`NCI_PIXABAY_KEY` | Optional | Pixabay [API key](https://pixabay.com/api/docs/)
`NCI_PEXELS_KEY` | Optional | Pexels [API key](https://www.pexels.com/api/new/)
`NCI_UNSPLASH_KEY` | Optional | Unsplash [API key](https://unsplash.com/oauth/applications)


### 2. Running client side
To run React fronted of the app please use following commands executed in project directory:
```sh
cd client-side
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### 3. Running server side
To run Express backend used for getting images please use following commands executed in project directory:
```sh
cd server-side
npm start
```
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


## Show Support
Give this project a 🌟 to show your support 😃😃 

## Contributing
We greatly appreciate any work contributed, no matter how small! Contributions, issues and feature requests are welcome ❤️
