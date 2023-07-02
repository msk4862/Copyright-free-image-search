import { CONFIG } from './config';
import Image from './models/Image';

const createUrl = (path: string) => {
  return `${CONFIG.HOST}/${path}`;
};

export const fetcher = async <TResponse, TRequestBody = unknown>(
  url: string,
  method: 'POST' | 'GET',
  headers?: HeadersInit,
  body?: TRequestBody
): Promise<TResponse> => {
  const res = await fetch(url, {
    method,
    headers: headers && headers,
    body: body && JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  return res.json();
};

export const fetchImages = async (searchTerm: string) => {
  return fetcher<Image[]>(createUrl(`api/images/${searchTerm}`), 'GET');
};
