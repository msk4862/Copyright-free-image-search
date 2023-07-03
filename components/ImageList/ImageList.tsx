import { fetchImages } from '@/utils/apis';
import { ImageCard } from './ImageCard';
import { PAGE_NO } from '@/utils/constants';

import './ImageList.scss';

type Props = {
  searchTerm: string;
  page?: number;
};

export const ImageList = async ({ searchTerm, page = PAGE_NO }: Props) => {
  const imagesRes = await fetchImages(searchTerm, page);

  if (!imagesRes.status) {
    return 'Something went wrong';
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
