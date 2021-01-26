const Image = require("../models/Image");

class PlaceholderService {
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
                    "",
                    "http://via.placeholder.com/200",
                    "Placeholder",
                    PlaceholderService.SERVICE_NAME,
                    PlaceholderService.SERVICE_URL,
                )
            );
        }
        return Promise.resolve(result);
    }
}
PlaceholderService.SERVICE_NAME = "None";
PlaceholderService.SERVICE_URL = "https://placeholder.com";

module.exports = PlaceholderService;
