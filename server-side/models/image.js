class Image {
    
    constructor(URL, previewURL, author, service) {
        Image.AUTO_FIELD = Image.AUTO_FIELD ? Image.AUTO_FIELD+1:15000;

        this.id = Image.AUTO_FIELD;
        this.URL = URL;
        this.previewURL = previewURL;
        this.author = author;
        this.service = service;
    }
}

module.exports = Image;
