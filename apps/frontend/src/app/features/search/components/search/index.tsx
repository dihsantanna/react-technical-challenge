import React from 'react';
import { useSearch } from '../../actions';

export const Search: React.FC = () => {
  const { handleChange } = useSearch();
  return (
    <input
      data-testid="search-input"
      placeholder="O que você está procurando?"
      className="h-12 w-full rounded-lg pl-3 bg-transparent-15 text-neutral-lightest placeholder:text-transparent-50 placeholder:hover:text-neutral-lightest placeholder:focus:text-neutral-lightest placeholder:transition placeholder:ease-dissolve placeholder:duration-250 max-w-[628px] outline-none border hover:border-dark-violet-500 focus:border-dark-violet-500 placeholder:text-dark-violet-900 placeholder:opacity-50 text-dark-violet-900"
      onChange={handleChange}
      type="search"
    />
  );
};
