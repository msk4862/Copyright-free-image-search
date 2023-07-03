import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePrevious } from './usePrevious';

export const usePagination = (page: number) => {
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

  return {
    pageNo,
    setPageNo,
  };
};
