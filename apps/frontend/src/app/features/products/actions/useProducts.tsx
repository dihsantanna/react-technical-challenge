import { api } from '@/libs/axios/api';
import { ProductsType, ProductWithAttributes } from '@/types/product-type';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

export const useProducts = () => {
  const refElementToLoadMore = useRef<HTMLDivElement | null>(null);

  const {
    data: productsPages,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(['products'], {
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await api.get<ProductsType>(
        `/products?pagination[page]=${pageParam}&pagination[pageSize]=16`,
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
