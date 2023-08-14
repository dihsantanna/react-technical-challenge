export const parseSearchUrl = (url: string, query?: string) => {
  if (!query) {
    return url;
  }

  url += url.includes('?') ? '&' : '?';
  url += `filters[name][$containsi][0]=${query}&filters[description][$containsi][1]=${query}`;

  return url;
}
