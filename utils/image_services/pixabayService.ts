import { CONFIG } from '@/utils/config';
import Image from '../models/Image';
import { fetcher } from '../apis';
import { TImageServiceResonse } from '../types';

type IPixabayImageResponse = {
  imageWidth: number;
  imageHeight: number;
  links: { html: string };
  pageURL: string;
  webformatURL: string;
  user: string;
  likes: number;
};

type TPixabayResponse = TImageServiceResonse<'hits', IPixabayImageResponse>;

class PixabayService {
  static SERVICE_NAME = 'Pixabay' as const;
  static SERVICE_URL = 'https://pixabay.com';

  isEnabled(): boolean {
    const key = CONFIG.PIXABAY_KEY;
    if (key && typeof key === 'string' && key.length > 10) return true;
    return false;
  }

  request(
    query: string,
    per_page_images: number,
    page: number
  ): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      const url = `https://pixabay.com/api/?key=${
        CONFIG.PIXABAY_KEY
      }&q=${encodeURIComponent(
        query
      )}&per_page=${per_page_images}&page=${page}`;

      fetcher<TPixabayResponse>(url, 'GET')
        .then((response) => {
          const result = [];
          for (const image of response.hits) {
            result.push(
              new Image(
                image.imageWidth,
                image.imageHeight,
                image.pageURL,
                image.webformatURL,
                image.user,
                image.likes,
                PixabayService.SERVICE_NAME,
                PixabayService.SERVICE_URL
              )
            );
          }
          resolve(result);
        })
        .catch(reject);
    });
  }
}

export default PixabayService;
