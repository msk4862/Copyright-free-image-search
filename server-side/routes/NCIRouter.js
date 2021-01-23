const express = require("express");
const bodyParser = require("body-parser");
const shuffleArray = require("../utils/arrayShuffle");
const ServicesList = require("../utils/servicesList");
const { DEFAULT_PER_PAGE_IMAGE_COUNT } = require("../utils/config");


const NCIRouter = express.Router();
// NCIRouter.use(bodyParser.json());

NCIRouter.route("/").get((req, res) => {
    const query = req.query.img;
    const total_images = req.query.total_images || DEFAULT_PER_PAGE_IMAGE_COUNT;

    // fetching all enabled services
    const enabledServices = ServicesList.getEnabledServicesList();  
    const per_service_images = Math.ceil(total_images / enabledServices.length);

    const promises = [];
    // calling all enabled service's apis
    for (const service of enabledServices) {
        promises.push(new service().request(query, per_service_images));
    }

    let images = [];
    const successfulServices = [];
    const unsuccessfulServices = [];
    Promise.all(promises.map((p) => p.catch((e) => e)))
        .then((result) => {
            for (let i = 0; i < result.length; i++) {
                const serviceResult = result[i];
				const serviceName = ServicesList.getEnabledServicesList()[i].SERVICE_NAME;

				if (serviceResult instanceof Error) {
                    console.log(
                        `Service failed - ${serviceName}: `,
                        serviceResult.stack
                    );
                    unsuccessfulServices.push(serviceName);
                } else {
                    images = images.concat(serviceResult)
                    successfulServices.push(serviceName);
                }
			}
			
			if (successfulServices.length > 0) {
                // shuffle images
                shuffleArray(images)
				return res.json({
					successfulServices: successfulServices,
					unsuccessfulServices: unsuccessfulServices,
					result: images,
				});
			} else {
				console.log("All services failed!");
				return res.json({ error: "All services failed" });
			}
        })
        .catch((e) => {
            console.log("Main services fetching function failed - ", e);
            return res.json({
                error:
                    "Something went wrong while fetching data from external APIs: " + e,
            });
        });
});


module.exports = NCIRouter;
