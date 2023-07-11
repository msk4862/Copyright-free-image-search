'use client';
import { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
  pageNo: number;
  setPageNo: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({ pageNo, setPageNo }: PaginationProps) => {
  const handleNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setPageNo((prev) => prev + 1);
    } else {
      setPageNo((prev) => prev - 1);
    }
  };

  return (
    <nav className="flex justify-center align-middle items-center mt-5 mb-5 w-full">
      <button
        className="border border-white hover:bg-gray-700 text-white py-2 disabled:text-gray-400 px-4 rounded-l-3xl"
        onClick={() => handleNavigation('prev')}
        disabled={pageNo === 1}
      >
        Prev
      </button>
      <button
        className="border border-l-0 border-white hover:bg-gray-700 text-white py-2 px-4 rounded-r-3xl"
        onClick={() => handleNavigation('next')}
      >
        Next
      </button>
    </nav>
  );
};
