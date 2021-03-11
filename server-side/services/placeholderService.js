const Image = require("../models/Image");

class PlaceholderService {
    width = 200;
    height = 2000;

    constructor() {
        this.MAX_PLACEHOLDERS = 15;
    }

    isEnabled() {
        return true;
    }

    request(query) {
        const result = [];
        for (let i = 0; i < this.MAX_PLACEHOLDERS; i++) {
            result.push(
                new Image(
                    this.width,
                    this.height,
                    "",
                    `http://via.placeholder.com/${this.width}`,
                    "Placeholder",
                    0,
                    PlaceholderService.SERVICE_NAME,
                    PlaceholderService.SERVICE_URL
                )
            );
        }
        return Promise.resolve(result);
    }
}
PlaceholderService.SERVICE_NAME = "None";
PlaceholderService.SERVICE_URL = "https://placeholder.com";

module.exports = PlaceholderService;
