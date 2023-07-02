import { fetchImages } from '@/utils/apis';
import { ImageCard } from './ImageCard';

import './ImageList.scss';
import { Loader } from '../Loader';
import { Suspense } from 'react';

type Props = {
  searchTerm: string;
};

export const ImageList = async ({ searchTerm }: Props) => {
  const imagesRes = await fetchImages(searchTerm);

  if (!imagesRes.status) {
    // return <div>{`Something went wrong -  ${images.error.toString()}`}</div>;
    return 'dsli';
  }

  const { result } = imagesRes;

  return (
    <div className="image-list mt-4 grid p-10">
      {result.map((image) => {
        return <ImageCard key={image.id} {...image} />;
      })}
    </div>
  );
};
