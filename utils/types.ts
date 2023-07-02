import { NextResponse } from 'next/server';
import {
  UnsplashService,
  PexelsService,
  PixabayService,
  PlaceholderService,
} from '@/utils/image_services';
import Image from './models/Image';

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
