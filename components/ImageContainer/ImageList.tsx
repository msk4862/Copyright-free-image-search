'use client';

import Image from '@/utils/models/Image';
import { ImageCard } from './ImageCard';
import { useContext, useEffect } from 'react';
import { ImagesContext } from '@/context/ImagesContext';
import { TServices } from '@/utils/types';
import { dataParser } from '@/utils/util';
import { ImageListEmptyContainer } from './ImageContainer';

type ImageListProps = {
  images: Image[];
  imageProviders: TServices[];
};

export const ImageList = ({
  images: fetchedImages,
  imageProviders,
}: ImageListProps) => {
  const { images, setImages, sortKey, filterKeys } = useContext(ImagesContext);

  useEffect(() => {
    setImages(fetchedImages, imageProviders);
  }, [fetchedImages, imageProviders, setImages]);

  useEffect(() => {
    const parsedImages = dataParser(fetchedImages, filterKeys, sortKey);

    setImages(parsedImages, imageProviders);
  }, [fetchedImages, imageProviders, setImages, filterKeys, sortKey]);

  return (
    <div className="image-list mt-2 grid p-5">
      {!images || images.length === 0 ? (
        <ImageListEmptyContainer>
          Sorry no results matches your search filters!
        </ImageListEmptyContainer>
      ) : (
        images.map((image) => {
          return <ImageCard key={image.id} {...image} />;
        })
      )}
    </div>
  );
};
