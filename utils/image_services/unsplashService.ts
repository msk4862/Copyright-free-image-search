import { CONFIG } from '@/utils/config';
import Image from '../models/Image';
import { fetcher } from '../apis';
import { TImageServiceResonse } from '../types';

type IUnsplashImageResponse = {
  width: number;
  height: number;
  links: { html: string };
  urls: { small: string };
  user: { username: string };
  likes: number;
};

type TUnsplashResponse = TImageServiceResonse<
  'results',
  IUnsplashImageResponse
>;

class UnsplashService {
  MAX_PLACEHOLDERS = 15;
  static SERVICE_NAME = 'Unsplash' as const;
  static SERVICE_URL = 'https://unsplash.com';

  isEnabled(): boolean {
    // return false;

    const key = CONFIG.UNSPLASH_KEY;
    if (key && typeof key === 'string' && key.length > 10) return true;
    return false;
  }

  request(
    query: string,
    per_page_images: number,
    page: number
  ): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      const url = `https://api.unsplash.com/search/photos/?query=${encodeURIComponent(
        query
      )}&per_page=${per_page_images}&page=${page}`;

      fetcher<TUnsplashResponse>(url, 'GET', {
        Authorization: `Client-ID ${CONFIG.UNSPLASH_KEY}`,
      })
        .then((response) => {
          const result: Image[] = [];
          for (const image of response.results) {
            result.push(
              new Image(
                image.width,
                image.height,
                image.links.html,
                image.urls.small,
                image.user.username,
                image.likes,
                UnsplashService.SERVICE_NAME,
                UnsplashService.SERVICE_URL
              )
            );
          }
          resolve(result);
        })
        .catch(reject);
    });
  }
}

export default UnsplashService;
