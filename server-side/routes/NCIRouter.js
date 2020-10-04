const express = require("express");
const bodyParser = require("body-parser");
const ServicesList = require("../servicesList");

const NCIRouter = express.Router();
NCIRouter.use(bodyParser.json());


NCIRouter.route("/").get((req, res, next) => {
  const query = req.query.img;
  const promises = [];
  for(const service of ServicesList.getServicesList())
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
        const serviceName = ServicesList.getServicesList()[i].name;
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
          for (let i = 0; i < images.length; i++) {
            images[i].id = i;
          }
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


module.exports = NCIRouter;
