import { PropsWithChildren } from 'react';
import { fetchImages } from '@/utils/apis';
import { Pagination } from './Pagination';
import { ImageList } from './ImageList';
import { Filters } from '../Filters';
import { PAGE_NO } from '@/utils/constants';
import { ImagesContextProvider } from '@/context/ImagesContext';

import './ImageContainer.scss';

export const ImageListEmptyContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="image-list--empty flex justify-center items-center text-center mt-5">
      {children}
    </div>
  );
};

type ImageListProps = {
  searchTerm: string;
  showPagination?: boolean;
  imagesPerPage?: number;
  page?: number;
};

export const ImageContainer = async ({
  searchTerm,
  showPagination = true,
  imagesPerPage,
  page = PAGE_NO,
}: ImageListProps) => {
  const imagesRes = await fetchImages(searchTerm, page, imagesPerPage);

  if (!imagesRes.status) {
    return (
      <ImageListEmptyContainer>Something went wrong</ImageListEmptyContainer>
    );
  }

  const { result } = imagesRes;

  return (
    <ImagesContextProvider>
      {result.length === 0 && (
        <ImageListEmptyContainer>
          Sorry no result found!
          <br />
          Please try with some meaningful keyword.
        </ImageListEmptyContainer>
      )}
      {result.length > 0 && (
        <>
          {showPagination && <Filters />}
          <ImageList
            images={result}
            imageProviders={imagesRes.successfulServices}
          />
          {showPagination && <Pagination page={page} />}
        </>
      )}
    </ImagesContextProvider>
  );
};
