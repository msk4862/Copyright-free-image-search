const express = require("express");
const bodyParser = require("body-parser");
const shuffleArray = require("../utils/arrayShuffle");
const ServicesList = require("../utils/servicesList");

const NCIRouter = express.Router();
NCIRouter.use(bodyParser.json());

NCIRouter.route("/").get((req, res) => {
    const query = req.query.img;
	const promises = [];
	// calling all services apis
    for (const service of ServicesList.getEnabledServicesList()) {
        promises.push(new service().request(query));
    }

    const images = [];
    const successfulServices = [];
    const unsuccessfulServices = [];
    Promise.all(promises.map((p) => p.catch((e) => e)))
        .then((result) => {
            for (let i = 0; i < result.length; i++) {
                const serviceResult = result[i];
				const serviceName = ServicesList.getEnabledServicesList()[i].name;

				if (serviceResult instanceof Error) {
                    console.log(
                        `Service failed - ${serviceName}: `,
                        serviceResult.stack
                    );
                    unsuccessfulServices.push(serviceName);
                } else {
                    successfulServices.push(serviceName);
                    for (const resultImage of serviceResult) {
                        images.push(resultImage);
                    }
                }
			}
			
			if (successfulServices.length > 0) {
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
                    "Something went wrong while fetching data from external APIs",
            });
        });
});


module.exports = NCIRouter;
