import {
  UnsplashService,
  PexelsService,
  PixabayService,
  PlaceholderService,
} from '@/utils/image_services';
import Image from './models/Image';
import { FILTER_KEYS, ORIENTATION_FILTER_KEYS, SORT_KEYS } from './constants';

export type TImageServiceResonse<T extends string, K> = Record<T, Array<K>>;

export type TServices =
  | typeof UnsplashService.SERVICE_NAME
  | typeof PexelsService.SERVICE_NAME
  | typeof PixabayService.SERVICE_NAME
  | typeof PlaceholderService.SERVICE_NAME;

export type GetImageRouteResponse =
  | {
      status: true;
      successfulServices: TServices[];
      unsuccessfulServices: TServices[];
      result: Image[];
    }
  | {
      status: false;
      error: string;
    };

export type TFilterKeys = {
  [K in (typeof FILTER_KEYS)['OWNER']]: TServices;
} & {
  [K in (typeof FILTER_KEYS)['ORIENTATION']]: (typeof ORIENTATION_FILTER_KEYS)[number];
};

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type TSortKey = (typeof SORT_KEYS)[number];
