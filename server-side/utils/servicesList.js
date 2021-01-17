const PlaceholderService = require("../services/placeholderService");
const PixabayService = require("../services/pixabayService");
const UnsplashService = require("../services/unsplashService");
const PexelsService = require("../services/pexelsService");

const services = [PixabayService, UnsplashService, PexelsService];

class ServicesList {
    /**
     * Returns all enabled services.
     * If no service is enabled
     * then PlaceholderService sevice will be get activated
     */
    static getEnabledServicesList() {
        const enabledServices = [];
        for (const service of services) {
            if (new service().isEnabled()) {
                enabledServices.push(service);
            }
        }
        if (enabledServices.length > 0) {
            return enabledServices;
        } else {
            return [PlaceholderService];
        }
    }
    /**
     * Returns all services
     */
    static getAllServices() {
        return services;
    }
}

module.exports = ServicesList;
