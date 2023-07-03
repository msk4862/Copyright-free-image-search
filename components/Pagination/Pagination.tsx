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
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={() => handleNavigation('prev')}
        disabled={pageNo === 1}
      >
        Prev
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={() => handleNavigation('next')}
      >
        Next
      </button>
      <div className="absolute right-10">{pageNo} / 11111</div>
    </nav>
  );
};
