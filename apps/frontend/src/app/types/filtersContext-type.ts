export enum FiltersKeys {
  CATEGORY = "category",
  COLOR = "color",
  PRICE = "price",
}

interface FiltersType {
  category: number[];
  color: number[];
  price: [number, number][];
}

export interface FiltersContextType extends FiltersType {
  search: string;
  insertFilter: (key: FiltersKeys, value: number) => void;
  removeFilter: (key: FiltersKeys, value: number) => void;
  clearFilters: () => void;
  onSearchChange: (value: string) => void;
}