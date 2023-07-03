import { Header } from '@/components/Header';
import { ImageList } from '@/components/ImageList';

export default function HomePage() {
  return (
    <div className="home w-screen flex flex-col">
      <Header />
      <ImageList searchTerm="india" showPagination={false} />
    </div>
  );
}
