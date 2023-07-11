class Image {
  id: number;
  width: number;
  height: number;
  url: string;
  previewURL: string;
  author: string;
  likes: number;
  service: string;
  serviceUrl: string;
  private static AUTO_FIELD_ID = 1500;

  constructor(
    width: number,
    height: number,
    url: string,
    previewURL: string,
    author: string,
    likes: number,
    service: string,
    serviceUrl: string
  ) {
    Image.AUTO_FIELD_ID += 1;

    this.id = Image.AUTO_FIELD_ID;
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

export default Image;
