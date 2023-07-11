import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchBar } from '@/components/SearchBar';
import { capitalize } from '@/utils/util';

type Props = {
  params: { search: string };
};

/**
 * Change page metadata for image search page
 */
export function generateMetadata({ params }: Props): Metadata {
  const searchTerm = capitalize(params.search);

  return {
    title: `Collection of Copyright Free Images for ${searchTerm} | Search & Download non-copyright images`,
    description: `Download the perfect ${searchTerm} pictures. Find over 500+ of the best free ${searchTerm} images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓ from popular platform like Unsplash, Pixabay and Pexels, etc."`,
  };
}

export default function ImageListLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex w-full items-center justify-center p-2 md:p-4 bg-blue-900 h-50">
        <Link href={'/'}>
          <Image
            src={'/images/logo_sm.png'}
            className="logo--small"
            alt="logo"
            width={90}
            height={35}
          />
        </Link>
        <SearchBar className="w-5/6 ml-5 md:ml-10" />
      </header>
      <section>{children}</section>
    </>
  );
}
