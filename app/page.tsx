import { Header } from '@/components/Header';
import { ImageList } from '@/components/ImageList';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="home w-screen flex flex-col mt-4">
      <Header />
      <ImageList searchTerm="india" />
    </div>
  );
}
