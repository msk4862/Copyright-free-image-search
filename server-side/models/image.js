class Image {
   constructor(URL, previewURL, author, service) {
      this.id = 0;
      this.URL = URL;
      this.previewURL = previewURL;
      this.author = author;
      this.service = service;
   }
}

module.exports = Image;
