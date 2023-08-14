import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export enum SortBy {
  PRICEASC = 'price_asc',
  PRICEDESC = 'price_desc',
  RELEVANCE = 'relevance',
}

export const useSort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RELEVANCE);

  const handleChange = (value: SortBy) => {
    setSortBy(value);
  };

  useEffect(() => {
    if(sortBy && sortBy !== SortBy.RELEVANCE) {
      const params = new URLSearchParams(searchParams as unknown as URLSearchParams);

      params.set('sort', sortBy);

      router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);
    }

    if (sortBy === SortBy.RELEVANCE) {
      const params = new URLSearchParams(searchParams as unknown as URLSearchParams);

      params.delete('sort');

      router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);
    }
  }, [sortBy]);

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
