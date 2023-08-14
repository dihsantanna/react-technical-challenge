import Text from '@/features/core/components/text';
import { FiltersTypes } from '@/types/filters-types';
import { Disclosure } from '@headlessui/react';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useFilters } from '../../actions';
import { FilterSelector } from '../filterSelector';

export const FilterList: React.FC = () => {
  const { filters, onChangeFilter, selectedFilters, clearAllFilters } =
    useFilters();

  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex md:hidden justify-between h-5 text-sm font-bold">
            Filtros
            <ChevronLeftIcon
              height={16}
              color="black"
              className={open ? 'transform -rotate-90' : ''}
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            <div className="w-full bg-white px-4 pt-5 pb-[18px] rounded-lg shadow-default flex flex-col">
              <div className="flex items-center justify-between">
                <Text variant="h3" className="font-bold text-sm">
                  Filtrar por
                </Text>
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-header-violet-700 hover:opacity-90"
                >
                  Limpar Filtro
                </button>
              </div>
              {Object.entries(filters).map(([key, value]) => (
                <FilterSelector
                  key={key}
                  onChangeFilter={onChangeFilter}
                  type={key as FiltersTypes}
                  options={value.options}
                  title={value.name}
                  selectedFilters={selectedFilters[key as FiltersTypes]}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
