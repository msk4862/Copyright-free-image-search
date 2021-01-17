const axios = require("axios");
const { PIXABAY_KEY } = require("../utils/config");
const Image = require("../models/Image");

class PixabayService {
    isEnabled() {
        const key = PIXABAY_KEY;
        return key && key.length && key.length > 10;
    }

    request(query, per_page_images) {
        return new Promise((resolve, reject) => {
            var url =
                `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${query}&per_page=${per_page_images}`;
            axios
                .get(url)
                .then((response) => {
                    const data = response.data;
                    const result = [];
                    for (const image of data.hits) {
                        result.push(
                            new Image(
                                image.pageURL,
                                image.webformatURL,
                                image.user,
                                "Pixabay"
                            )
                        );
                    }
                    resolve(result);
                })
                .catch(reject);
        });
    }
}

module.exports = PixabayService;
