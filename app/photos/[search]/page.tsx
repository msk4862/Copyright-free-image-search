import { Suspense } from 'react';
import { ImageList, ImageListEmptyContainer } from '@/components/ImageList';
import { PAGE_NO } from '@/utils/constants';
import { getParsedValue } from '@/utils/util';
import { LoaderBasic } from '@/components/Loader';

type Props = {
  params: { search: string };
  searchParams?: { page: string };
};

export default function ImageListPage({ params, searchParams }: Props) {
  const pageNo = getParsedValue(searchParams?.page, parseInt, PAGE_NO);

  return (
    <div className="w-full flex flex-col">
      <Suspense
        fallback={
          <ImageListEmptyContainer>
            <LoaderBasic />
          </ImageListEmptyContainer>
        }
      >
        <ImageList searchTerm={params.search} page={pageNo} />
      </Suspense>
    </div>
  );
}
