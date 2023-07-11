import { Suspense } from 'react';
import {
  ImageContainer,
  ImageListEmptyContainer,
} from '@/components/ImageContainer';
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
        <ImageContainer searchTerm={params.search} page={pageNo} />
      </Suspense>
    </div>
  );
}
