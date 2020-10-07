const Image = require("../models/image");

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
                    "PlaceholderService"
                )
            );
        }
        return Promise.resolve(result);
    }
}

module.exports = PlaceholderService;
