const PlaceholderService = require('./services/placeholderService')
const PixabayService = require('./services/pixabayService');
const UnsplashService = require('./services/unsplashService');
const PexelsService = require('./services/pexelsService');

const services = [ PixabayService, UnsplashService, PexelsService ];

class ServicesList
{
   static getServicesList() {
     const enabledServices = [];
     for(const service of services) {
       if(new service().isEnabled()) {
         enabledServices.push(service);
       }
     }
     if(enabledServices.length > 0) {
       return enabledServices
     }
     else {
       return [ PlaceholderService ];
     }
   }

   static getAllServices() {
    return services;
   }
}

module.exports = ServicesList;