'use client';

import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { fetchImages } from '@/utils/apis';
import { Pagination } from './Pagination';
import { Filters } from '../Filters';
import { PAGE_NO } from '@/utils/constants';
import { ImagesContext } from '@/context/ImagesContext';

import './ImageContainer.scss';
import { ImageCard } from './ImageCard';
import { dataParser } from '@/utils/util';
import { LoaderBasic } from '../Loader';

type ImageListProps = {
  searchTerm: string;
  showPagination?: boolean;
  imagesPerPage?: number;
  page?: number;
};

export const ImageListEmptyContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="image-list--empty flex justify-center items-center text-center mt-5">
      {children}
    </div>
  );
};

export const ImageContainer = ({
  searchTerm,
  showPagination = true,
  imagesPerPage,
  page = PAGE_NO,
}: ImageListProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    images,
    filteredImages,
    setImages,
    setFilteredImages,
    sortKey,
    filterKeys,
  } = useContext(ImagesContext);

  useEffect(() => {
    async function fetchImage() {
      setIsLoading(true);
      const imagesRes = await fetchImages(searchTerm, page, imagesPerPage);

      if (imagesRes.status) {
        const { result, successfulServices } = imagesRes;
        setImages(result, successfulServices);
      }

      setIsLoading(false);
    }

    fetchImage();
  }, [setImages, searchTerm, page, imagesPerPage]);

  useEffect(() => {
    const parsedImages = dataParser(images, filterKeys, sortKey);

    setFilteredImages(parsedImages);
  }, [images, setFilteredImages, filterKeys, sortKey]);

  if (isLoading || !images) {
    return (
      <ImageListEmptyContainer>
        <LoaderBasic />
      </ImageListEmptyContainer>
    );
  }

  return (
    <>
      {!isLoading && images.length === 0 && (
        <ImageListEmptyContainer>
          Sorry no result found!
          <br />
          Please try with some meaningful keyword.
        </ImageListEmptyContainer>
      )}
      {images.length > 0 && (
        <>
          {showPagination && <Filters />}
          <div className="image-list mt-2 grid p-5">
            {!filteredImages || filteredImages.length === 0 ? (
              <ImageListEmptyContainer>
                Sorry no results matches your search filters!
              </ImageListEmptyContainer>
            ) : (
              filteredImages.map((image) => {
                return <ImageCard key={image.id} {...image} />;
              })
            )}
          </div>
          {showPagination && <Pagination page={page} />}
        </>
      )}
    </>
  );
};
