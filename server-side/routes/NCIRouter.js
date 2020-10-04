const express = require("express");
const bodyParser = require("body-parser");
const NCIRouter = express.Router();
NCIRouter.use(bodyParser.json());
const PlaceholderService = require('../services/placeholderService')
const PixabayService = require('../services/pixabayService')

const imageCount = 50;

NCIRouter.route("/").get((req, res, next) => {
  const query = req.query.img;
  const promises = [];
  for(const service of getServicesList())
  {
    promises.push(new service().request(query));
  }
  
  const images = [];
  const successfulServices = [];
  const unsuccessfulServices = []
  Promise.all(promises.map(p => p.catch(e => e)))
    .then(result => {
      for (let i = 0; i < result.length; i++) {
        const serviceResult = result[i];
        const serviceName = getServicesList()[i].name;
        if(serviceResult instanceof Error) {
          console.log(`Service failed - ${serviceName}: `, serviceResult)
          unsuccessfulServices.push(serviceName);
        }
        else {
          successfulServices.push(serviceName);
          for(const resultImage of serviceResult)
          {
            images.push(resultImage);
          }
        }
        if(successfulServices.length > 0)
        {
          res.json({ successfulServices: successfulServices, unsuccessfulServices: unsuccessfulServices, result: images});
        }
        else
        {
          console.log("All services failed!");
          res.json({ error: "All services failed"}) 
        }
      }
    })
    .catch(e => {
      console.log("Main services fetching function failed - ", e);
      res.json({ error: "Something went wrong while fetching data from external APIs"}) 
    });
});

function getServicesList()
{
  const services = [ PixabayService ]
  const enabledServices = [];
  for(const service of services) {
    if(new service().isEnabled()) {
      enabledServices.push(service);
    }
  }
  if(enabledServices.length > 0) {
    return enabledServices
  }
  else {
    return [ PlaceholderService ];
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

module.exports = NCIRouter;
