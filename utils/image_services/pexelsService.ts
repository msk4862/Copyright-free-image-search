import { CONFIG } from '@/utils/config';
import Image from '../models/Image';
import { fetcher } from '../apis';
import { TImageServiceResonse } from '../types';

type IPexelImageResponse = {
  width: number;
  height: number;
  url: string;
  src: { medium: string };
  photographer: string;
};

type TPexelResponse = TImageServiceResonse<'photos', IPexelImageResponse>;

class PexelsService {
  static SERVICE_NAME = 'Pexels' as const;
  static SERVICE_URL = 'https://www.pexels.com';

  isEnabled(): boolean {
    // return false;

    const key = CONFIG.PEXELS_KEY;
    if (key && typeof key === 'string' && key.length > 10) return true;
    return false;
  }

  request(
    query: string,
    per_page_images: number,
    page: number
  ): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query
      )}&per_page=${per_page_images}&page=${page}`;

      fetcher<TPexelResponse>(url, 'GET', {
        Authorization: CONFIG.PEXELS_KEY as string,
      })
        .then((response) => {
          const result = [];
          for (const image of response.photos) {
            result.push(
              new Image(
                image.width,
                image.height,
                image.url,
                image.src.medium,
                image.photographer,
                0,
                PexelsService.SERVICE_NAME,
                PexelsService.SERVICE_URL
              )
            );
          }
          resolve(result);
        })
        .catch(reject);
    });
  }
}

export default PexelsService;
