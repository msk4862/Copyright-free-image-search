import { Suspense } from 'react';
import { ImageList } from '@/components/ImageList';
import { ImageListContainer } from '@/components/ImageList';
import { Loader } from '@/components/Loader';
import { PAGE_NO } from '@/utils/constants';
import { getParsedValue } from '@/utils/util';
type Props = {
  params: { search: string };
  searchParams?: { page: string };
};

export default function ImageListPage({ params, searchParams }: Props) {
  console.log('page prev', params, searchParams);

  const pageNo = getParsedValue(searchParams?.page, parseInt, PAGE_NO);

  return (
    <div className="w-full flex flex-col">
      <ImageListContainer page={pageNo}>
        <Suspense fallback={<Loader />}>
          <ImageList searchTerm={params.search} page={pageNo} />
        </Suspense>
      </ImageListContainer>
    </div>
  );
}
