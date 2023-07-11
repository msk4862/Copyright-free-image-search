'use client';

import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import { Writeable } from '@/utils/types';

import './Dropdown.scss';

type DropdownProps<T extends string> = {
  title: string;
  options: readonly T[];
  defaultValue?: string;
  onSelect: ({ name, value }: { name: string; value: string }) => void;
};

export const CustomDropdown = <T extends string>({
  title,
  options,
  defaultValue,
  onSelect,
}: DropdownProps<T>) => {
  // coverting options to mutable types, from readonly options array (if applicable)
  const mutableOptions = options as Writeable<typeof options>;

  const onDropdownSelect = ({ value }: Option) => {
    onSelect({ name: title, value });
  };

  return (
    <Dropdown
      options={mutableOptions}
      value={defaultValue}
      onChange={onDropdownSelect}
      className="dropdown rounded-md bg-black md:px-3 md:py-2 text-xs md:text-sm outline-none cursor-pointer"
      placeholder={title}
    />
  );
};
