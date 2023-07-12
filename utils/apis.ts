import { CONFIG } from './config';
import { MAX_IMAGES_PER_PAGE, PAGE_NO } from './constants';
import { GetImageRouteResponse } from './types';

const createUrl = (path: string) => {
  return `${CONFIG.HOST}/${path}`;
};

export const fetcher = async <TResponse, TRequestBody = unknown>(
  url: string,
  method: 'POST' | 'GET',
  headers?: HeadersInit,
  body?: TRequestBody
): Promise<TResponse> => {
  try {
    const res = await fetch(url, {
      method,
      headers: headers && headers,
      body: body && JSON.stringify(body),
    });

    if (!res.ok) {
      return Promise.reject({ status: false });
    }

    return res.json();
  } catch (e) {
    console.error('Something went wrong: ', e);
    return Promise.reject({ status: false });
  }
};

export const fetchImages = (
  searchTerm: string,
  page: number = PAGE_NO,
  images_per_page: number = MAX_IMAGES_PER_PAGE
) => {
  return fetcher<GetImageRouteResponse>(
    `/api/images/${searchTerm}?images_per_page=${images_per_page}&page=${page}`,
    'GET'
  );
};
