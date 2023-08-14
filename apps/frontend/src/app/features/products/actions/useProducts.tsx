import { parseFiltersUrl } from '@/features/filters/actions';
import { api } from '@/libs/axios/api';
import { ProductsType, ProductWithAttributes } from '@/types/product-type';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';

const parseUrl = (
  url: string,
  filters: {
    categories: string[];
    colors: string[];
    prices: string[];
  },
  sort = '',
  search = '',
) => {
  url = parseFiltersUrl(url, filters);

  return url;
};

export const useProducts = () => {
  const refElementToLoadMore = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();

  const [filters] = useMemo(() => {
    const params = new URLSearchParams(
      searchParams as unknown as URLSearchParams,
    );

    const categories = JSON.parse(params.get('categories') ?? '[]') as string[];
    const colors = JSON.parse(params.get('colors') ?? '[]') as string[];
    const prices = JSON.parse(params.get('prices') ?? '[]') as string[];

    return [
      {
        categories,
        colors,
        prices,
      },
    ];
  }, [searchParams]);

  const {
    data: productsPages,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(['products', filters], {
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await api.get<ProductsType>(
        parseUrl(
          `/products?pagination[page]=${pageParam}&pagination[pageSize]=16`,
          filters,
        ),
      );
      return data;
    },
    getNextPageParam: (page) =>
      page.meta.pagination.page < page.meta.pagination.pageCount
        ? page.meta.pagination.page + 1
        : undefined,
  });

  const products =
    productsPages?.pages?.reduce(
      (acc, curr) => [...acc, ...curr.data],
      [] as ProductWithAttributes[],
    ) ?? [];

  useEffect(() => {
    if (refElementToLoadMore.current) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          console.log(entries);
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              refElementToLoadMore.current = null;
              fetchNextPage();
              obs.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: [0],
        },
      );

      observer.observe(refElementToLoadMore.current);

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  });

  return {
    products,
    isLoading,
    isFetchingNextPage,
    refElementToLoadMore,
  };
};
