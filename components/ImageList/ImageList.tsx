import { fetchImages } from '@/utils/apis';
import { ImageCard } from './ImageCard';

type Props = {
  searchTerm: string;
};

export const ImageList = async ({ searchTerm }: Props) => {
  const images = await fetchImages(searchTerm);

  console.log('IMages', images);

  return (
    <div className="p-10">
      {images.map((image) => {
        return <ImageCard key={image.id} {...image} />;
      })}
    </div>
  );
};
