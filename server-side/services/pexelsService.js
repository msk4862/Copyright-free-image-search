const axios = require("axios");
const { PEXELS_KEY } = require("../utils/config");
const Image = require("../models/Image");

class PexelsService {
    isEnabled() {
        const key = PEXELS_KEY;
        return key && key.length && key.length > 10;
    }

    request(query, per_page_images) {
        return new Promise((resolve, reject) => {
            var url = `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page_images}`;
            axios
                .get(url, { headers: { Authorization: PEXELS_KEY } })
                .then((response) => {
                    const data = response.data;
                    const result = [];
                    for (const image of data.photos) {
                        result.push(
                            new Image(
                                image.url,
                                image.src.medium,
                                image.photographer,
                                PexelsService.SERVICE_NAME,
                                PexelsService.SERVICE_URL,
                            )
                        );
                    }
                    resolve(result);
                })
                .catch(reject);
        });
    }
}
PexelsService.SERVICE_NAME = "Pexels";
PexelsService.SERVICE_URL = "https://www.pexels.com";

module.exports = PexelsService;
