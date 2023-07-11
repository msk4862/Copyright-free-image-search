import { Header } from '@/components/Header';
import { ImageContainer } from '@/components/ImageContainer';
import { HOMEPAGE_IMAGE_COUNT } from '@/utils/constants';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="home w-screen flex flex-col">
      <Header />
      <ImageContainer
        searchTerm="india"
        showPagination={false}
        imagesPerPage={HOMEPAGE_IMAGE_COUNT}
      />
    </div>
  );
}
