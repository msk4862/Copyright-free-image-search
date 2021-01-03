class Image {
    constructor(url, previewURL, author, service) {
        Image.AUTO_FIELD += 1;
        
        this.id = Image.AUTO_FIELD;
        this.url = url;
        this.previewURL = previewURL;
        this.author = author;
        this.service = service;
    }
}
Image.AUTO_FIELD = 15000;

module.exports = Image;
