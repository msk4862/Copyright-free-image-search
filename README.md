<div align="center">
    <h1><img src="https://socialify.git.ci/msk4862/Copyright-free-image-search/image?description=1&descriptionEditable=Tired%20of%20searching%20images%20from%20diffrent%20websites%3F%20Try%20using%20NCI%20which%20searches%20copyright%20free%20images%20from%20across%20the%20platforms%20like%20pixabay%2C%20unsplash%2C%20etc.%20and%20shows%20you%20the%20results%20in%20a%20single%20platform.&font=Raleway&language=1&logo=https%3A%2F%2Fuser-images.githubusercontent.com%2F24875366%2F108820679-8dfa9380-75e2-11eb-91ca-432ca114c4a5.png&owner=1&pattern=Plus&theme=Light" width="600"></h1>
      <br>
      <img src="https://travis-ci.org/msk4862/Copyright-free-image-search.svg?branch=master" width="90">
      <img src="https://img.shields.io/github/license/msk4862/Copyright-free-image-search?style=flat-square" width="80">
      <img src="https://img.shields.io/github/v/release/msk4862/Copyright-free-image-search?style=flat-square" width="85">
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

> Create `.env` file if you want to set any of the below environmental variable.

| Option             | Type     | Description                                                                                                |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------- |
| `HOST`             | Optional | This variable specify application host to run backend server, if not set it defaults to `http://127.0.0.1` |
| `NCI_PIXABAY_KEY`  | Optional | Pixabay [API key](https://pixabay.com/api/docs/)                                                           |
| `NCI_PEXELS_KEY`   | Optional | Pexels [API key](https://www.pexels.com/api/new/)                                                          |
| `NCI_UNSPLASH_KEY` | Optional | Unsplash [API key](https://unsplash.com/oauth/applications)                                                |

### 2. Running project locally

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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
