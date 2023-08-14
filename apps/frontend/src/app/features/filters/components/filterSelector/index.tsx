import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import BaseCheckbox from '@/features/core/components/base-checkbox';
import { FiltersTypes } from '@/types/filters-types';

interface FilterSelectorProps {
  options: {
    value: string | number;
    label: string;
  }[];
  onChangeFilter: (type: FiltersTypes, value: string | number) => void;
  type: FiltersTypes;
  title: string;
  selectedFilters: string[];
}

export const FilterSelector: React.FC<FilterSelectorProps> = ({
  options,
  onChangeFilter,
  type,
  title,
  selectedFilters,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between h-5 text-sm font-bold mt-4">
            {title}
            <ChevronLeftIcon
              height={16}
              color="black"
              className={open ? 'transform -rotate-90' : ''}
            />
          </Disclosure.Button>
          <hr className="border-[#585858] opacity-20 my-4" />
          <Disclosure.Panel className="text-gray-500 flex flex-col">
            {options.map(({ value, label }) => (
              <div className="flex items-center gap-2 my-3">
                <BaseCheckbox
                  name={label}
                  id={`${type}-${value}`}
                  onChange={() => onChangeFilter(type, value)}
                  checked={selectedFilters.includes(value.toString())}
                  dataTestId={`filter-${type}-${value}`}
                />
                <label
                  htmlFor={`${type}-${value}`}
                  className="cursor-pointer text-sm"
                >
                  {label}
                </label>
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
