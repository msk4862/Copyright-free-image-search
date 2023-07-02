import { Metadata, ResolvingMetadata } from 'next';
import { PropsWithChildren } from 'react';

type Props = {
  params: { search: string };
};

/**
 * Change page metadata for image search page
 */
export function generateMetadata({ params }: Props): Metadata {
  const searchTerm = params.search;

  return {
    title: `Collection of Copyright Free Images for ${searchTerm} | Search & Download non-copyright images`,
    description: `Download the perfect ${searchTerm} pictures. Find over 500+ of the best free ${searchTerm} images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓ from popular platform like Unsplash, Pixabay and Pexels, etc."`,
  };
}

export default function ImageListLayout({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}
