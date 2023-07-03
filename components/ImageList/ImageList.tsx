import { PropsWithChildren } from 'react';
import { fetchImages } from '@/utils/apis';
import { ImageCard } from './ImageCard';
import { Pagination } from './Pagination';
import { PAGE_NO } from '@/utils/constants';

import './ImageList.scss';

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
  page?: number;
};

export const ImageList = async ({
  searchTerm,
  showPagination = true,
  page = PAGE_NO,
}: ImageListProps) => {
  const imagesRes = await fetchImages(searchTerm, page);

  if (!imagesRes.status) {
    return (
      <ImageListEmptyContainer>Something went wrong</ImageListEmptyContainer>
    );
  }

  const { result } = imagesRes;

  return (
    <>
      {result.length === 0 && (
        <ImageListEmptyContainer>
          Sorry no result found!
          <br />
          Please try with some meaningful keyword.
        </ImageListEmptyContainer>
      )}
      {result.length > 0 && (
        <>
          <div className="image-list mt-2 grid p-5">
            {result.map((image) => {
              return <ImageCard key={image.id} {...image} />;
            })}
          </div>

          {showPagination && <Pagination page={page} />}
        </>
      )}
    </>
  );
};
