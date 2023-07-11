import React, { useContext } from 'react';
import { Dropdown } from '../Dropdown';
import { ImagesContext } from '@/context/ImagesContext';

import { TFilterKeys, TServices } from '@/utils/types';

type FilterDropdownProps<T extends string> = {
  filterName: keyof TFilterKeys;
  options: readonly T[];
};

const FilterDropdown = <T extends string>({
  filterName,
  options,
}: FilterDropdownProps<T>) => {
  const { filterKeys, setFilterKey } = useContext(ImagesContext);

  const onFilterSet = ({ value }: { value: string }) => {
    setFilterKey(filterName, value as TServices);
  };

  return (
    <Dropdown
      title={filterName}
      defaultValue={filterKeys[filterName]}
      options={options}
      onSelect={onFilterSet}
    />
  );
};

export default FilterDropdown;
