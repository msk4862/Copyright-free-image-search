const axios = require("axios");
const { UNSPLASH_KEY } = require("../utils/config");
const Image = require("../models/Image");

class UnsplashService {
    isEnabled() {
        const key = UNSPLASH_KEY;
        return key && key.length && key.length > 10;
    }

    request(query, per_page_images) {
        return new Promise((resolve, reject) => {
            var url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=${per_page_images}`;
            axios
                .get(url, {
                    headers: { Authorization: "Client-ID " + UNSPLASH_KEY },
                })
                .then((response) => {
                    const data = response.data;
                    const result = [];
                    for (const image of data.results) {
                        result.push(
                            new Image(
                                image.width,
                                image.height,
                                image.links.html,
                                image.urls.small,
                                image.user.username,
                                image.likes,
                                UnsplashService.SERVICE_NAME,
                                UnsplashService.SERVICE_URL
                            )
                        );
                    }
                    resolve(result);
                })
                .catch(reject);
        });
    }
}
UnsplashService.SERVICE_NAME = "Unsplash";
UnsplashService.SERVICE_URL = "https://unsplash.com";

module.exports = UnsplashService;
