import Image from '../models/Image';

class PlaceholderService {
  width = 200;
  height = 2000;
  MAX_PLACEHOLDERS = 2;
  static SERVICE_NAME = 'Placeholder' as const;
  static SERVICE_URL = 'https://placeholder.com';

  isEnabled() {
    return false;
  }

  request(): Promise<Image[]> {
    const result = [];
    for (let i = 0; i < this.MAX_PLACEHOLDERS; i++) {
      result.push(
        new Image(
          this.width,
          this.height,
          '',
          `http://via.placeholder.com/${this.width}`,
          'Placeholder',
          0,
          PlaceholderService.SERVICE_NAME,
          PlaceholderService.SERVICE_URL
        )
      );
    }
    return Promise.resolve(result);
  }
}

export default PlaceholderService;
