import React, { useState } from 'react';

export enum SortBy {
  PRICEASC = 'price_asc',
  PRICEDESC = 'price_desc',
  RELEVANCE = 'relevance',
}

export const useSort = () => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RELEVANCE);

  const handleChange = (value: SortBy) => {
    setSortBy(value);
  };

  const sortByOptions = {
    [SortBy.RELEVANCE]: 'Relevância',
    [SortBy.PRICEASC]: 'Menor preço',
    [SortBy.PRICEDESC]: 'Maior preço',
  };

  return {
    sortByOptions,
    sortBy,
    handleChange,
  };
};
