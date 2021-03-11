class Image {
    constructor(
        width,
        height,
        url,
        previewURL,
        author,
        likes,
        service,
        serviceUrl
    ) {
        Image.AUTO_FIELD += 1;

        this.id = Image.AUTO_FIELD;
        this.width = width;
        this.height = height;
        this.url = url;
        this.previewURL = previewURL;
        this.author = author;
        this.likes = likes;
        this.service = service;
        this.serviceUrl = serviceUrl;
    }
}
Image.AUTO_FIELD = 15000;

module.exports = Image;
