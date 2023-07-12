'use client';

import React, { useContext } from 'react';
import { XCircle } from 'react-feather';
import FilterDropdown from './FilterDropdown';
import SortingDropdown from './SortDropdown';
import { ImagesContext } from '@/context/ImagesContext';
import {
  FILTER_KEYS,
  ORIENTATION_FILTER_KEYS,
  SORT_KEYS,
} from '@/utils/constants';

export const Filters = () => {
  const { clearFilters, totalProviders } = useContext(ImagesContext);

  return (
    <div className="flex flex-row justify-between items-center mt-3">
      <div className="sorting">
        <SortingDropdown sortTitle="Sort By" options={SORT_KEYS} />
      </div>

      <div className="flex flex-row justify-end items-center gap-1 md:gap-4 flex-1 mr-2">
        <FilterDropdown
          filterName={FILTER_KEYS.OWNER}
          options={totalProviders as Readonly<typeof totalProviders>}
        />
        <FilterDropdown
          filterName={FILTER_KEYS.ORIENTATION}
          options={ORIENTATION_FILTER_KEYS}
        />
        <button className="text-white mr-2" onClick={clearFilters}>
          <span className="hidden md:block">Clear</span>
        </button>
      </div>
    </div>
  );
};
