import React, { useContext } from 'react';
import { ImagesContext } from '@/context/ImagesContext';
import { Dropdown } from '../Dropdown';
import { SORT_KEYS } from '@/utils/constants';
import { TSortKey } from '@/utils/types';

type SortingDropdownProps = {
  sortTitle: string;
  options: typeof SORT_KEYS;
};

const SortingDropdown = ({ sortTitle, options }: SortingDropdownProps) => {
  const { setSortKey } = useContext(ImagesContext);

  const onSetSortKey = ({ value }: { value: string }) => {
    setSortKey(value as TSortKey);
  };

  return (
    <Dropdown title={sortTitle} options={options} onSelect={onSetSortKey} />
  );
};

export default SortingDropdown;
