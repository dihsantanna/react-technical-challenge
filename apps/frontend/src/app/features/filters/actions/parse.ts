export const parseFiltersUrl = (
  url: string,
  filters: {
    categories: string[];
    colors: string[];
    prices: string[];
  },
) => {
  const { categories, colors, prices } = filters;

  if (!categories.length && !colors.length && !prices.length) {
    return url;
  }

  url += url.includes('?') ? '&' : '?';
  url += categories
    .map(
      (category, index) =>
        `filters[$or][${index}][category][id][$eq]=${category}`,
    )
    .join('&');
  url += colors
    .map((color, index) => `filters[$or][${index}][color][id][$eq]=${color}`)
    .join('&');
  url += prices
    .map((price, index) => {
      const [min, max] = price.split('-');
      return `filters[$or][${index}][price][$gte]=${min}&filters[price][$lte]=${max}`;
    })
    .join('&');

  return url;
};
