import { SortBy } from "./useSort";

export const parseSortUrl = (url: string, sortBy?: SortBy) => {
  if (!sortBy) {
    return url;
  }

  const [price, sort] = sortBy.split('_');

  url += url.includes('?') ? '&' : '?';
  url += `sort=${price}:${sort}`;

  return url;
}
