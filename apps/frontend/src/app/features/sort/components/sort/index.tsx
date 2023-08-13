import React from 'react';
import { Listbox } from '@headlessui/react';
import { useSort } from '../../actions';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { SortBy } from '../../actions/useSort';

export const Sort: React.FC = () => {
  const { sortByOptions, sortBy, handleChange } = useSort();

  return (
    <div
      className="flex items-center gap-4 text-sm flex-wrap md:flex-nowrap"
      data-testid="sort"
    >
      <span>Produtos ordenados por:</span>
      <Listbox
        as="div"
        className="relative"
        onChange={handleChange}
        value={sortBy}
        role="combobox"
        title="Ordenar produtos por ..."
      >
        <Listbox.Button
          title="Produtos ordenados por"
          className="flex text-xs font-bold bg-white rounded-full py-2 px-5 items-center justify-between w-[180px]"
        >
          {sortByOptions[sortBy]} <ChevronUpDownIcon height={13.5} />
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 bg-white w-[180px] border overflow-hidden mt-1 rounded-xl">
          {Object.entries(sortByOptions).map(([key, value]) => (
            <Listbox.Option
              key={key}
              value={key as SortBy}
              className={`text-xs font-bold py-2 cursor-pointer px-5 items-center justify-between w-[180px] hover:bg-dark-violet-500 hover:text-white ${
                sortBy === key ? 'bg-dark-violet-500 text-white' : 'bg-white'
              }`}
            >
              {value}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
