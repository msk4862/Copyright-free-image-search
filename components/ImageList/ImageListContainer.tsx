'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Pagination } from '../Pagination';
import './ImageList.scss';
import { usePrevious } from '@/hooks';

type ImageListContainerProps = {
  page: number;
};

export const ImageListContainer = ({
  page,
  children,
}: PropsWithChildren<ImageListContainerProps>) => {
  const [pageNo, setPageNo] = useState(page);
  const router = useRouter();
  const pathname = usePathname();

  const prevPageNo = usePrevious(pageNo);

  useEffect(() => {
    // skip adding page no. only when rendering results for the first time
    if (!prevPageNo && pageNo === 1) {
      return;
    }

    // adding page no. query param in route
    router.push(`${pathname}?page=${pageNo}`);
  }, [pageNo, router, pathname, prevPageNo]);

  return (
    <>
      {children}
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </>
  );
};
