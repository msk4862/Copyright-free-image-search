const axios = require("axios");
const { PEXELS_KEY } = require("../utils/config");
const Image = require("../models/Image");

class PexelsService {
    isEnabled() {
        const key = PEXELS_KEY;
        return key && key.length && key.length > 10;
    }

    request(query) {
        return new Promise((resolve, reject) => {
            var url = `https://api.pexels.com/v1/search?query=${query}&per_page=50`;
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
                                "Pexels"
                            )
                        );
                    }
                    resolve(result);
                })
                .catch(reject);
        });
    }
}

module.exports = PexelsService;
