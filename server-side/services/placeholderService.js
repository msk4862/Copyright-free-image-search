const axios = require("axios");
const Image = require('../models/image')

class PlaceholderService
{
   isEnabled() {
      return true;
   }

   request(query) {
      const result = []
      for (let i = 0; i < 50; i++) {
         result.push(new Image('', 'https://picsum.photos/200?r=' + i, 'Placeholder', 'PlaceholderService'))
      }
      return Promise.resolve(result)
   }
}

module.exports = PlaceholderService;
