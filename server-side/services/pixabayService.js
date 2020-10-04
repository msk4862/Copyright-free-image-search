const axios = require("axios");
const Image = require('../models/image')

class PixabayService
{
   isEnabled() {
      const key = process.env.NCI_PIXABAY_KEY;
      return key && key.length && key.length > 10;
   }

   request(query) {
      return new Promise((resolve, reject) => {
         var url =
            `https://pixabay.com/api/?key=${process.env.NCI_PIXABAY_KEY}` +
            `&q=${query}&per_page=` +
            imageCount;
         axios.get(url)
            .then((response) =>  {
               const data = JSON.parse(response.data);
               const result = []
               for(const image of data.hits)
               {
                  result.push(new Image(
                     image.pageURL,
                     image.previewURL,
                     image.user,
                     "Pixabay"
                  ))
               }
               resolve(result);
            })
            .catch(reject);
      });
   }
}

module.exports = PixabayService;