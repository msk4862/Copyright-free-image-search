const axios = require("axios");
const Image = require('../models/image')

class UnsplashService
{
   isEnabled() {
      const key = process.env.NCI_UNSPLASH_KEY;
      return key && key.length && key.length > 10;
   }

   request(query) {
      return new Promise((resolve, reject) => {
         var url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=50`;
         axios.get(url, { headers: { Authorization: 'Client-ID ' + process.env.NCI_UNSPLASH_KEY }})
            .then((response) =>  {
               const data = response.data;
               const result = []
               for(const image of data.results)
               {
                  result.push(new Image(
                     image.links.html,
                     image.urls.small,
                     image.user.username,
                     "Pexels"
                  ))
               }
               resolve(result);
            })
            .catch(reject);
      });
   }
}

module.exports = UnsplashService;
