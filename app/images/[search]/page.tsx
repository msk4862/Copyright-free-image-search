import { ImageList } from '@/components/ImageList';
import { Loader } from '@/components/Loader';
import { Suspense } from 'react';

type Props = {
  params: { search: string };
};

export default function Page({ params }: Props) {
  return (
    <div className="w-full flex flex-col">
      <Suspense fallback={<Loader />}>
        <ImageList searchTerm={params.search} />
      </Suspense>
    </div>
  );
}
