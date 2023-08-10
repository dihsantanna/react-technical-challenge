import React from 'react';
import Container from '@/components/container';
import BaseTextInput from '@/components/base-text-input';
import Image from 'next/image';
import { useSearchBar } from '../../actions/useSearchBar';

export const SearchBar: React.FC = () => {
  const { handleChange } = useSearchBar();
  return (
    <Container
      as="header"
      className="bg-gradient-to-br from-dark-violet-900 to-dark-violet-700 min-w-full"
      testId="header"
    >
      <div className="flex-col gap-4 items-center py-5 px-16 flex sm:flex-row justify-between max-w-[1440px] mx-auto">
        <Image
          data-testid="80lines-logo"
          src="/80lines_logo.svg"
          alt="80 Lines logo"
          width="124"
          height="32"
        />
        <BaseTextInput
          testId="search-input"
          placeholder="O que voce está procurando?"
          className="max-w-[628px] outline-none border hover:border-dark-violet-500 focus:border-dark-violet-500 placeholder:text-dark-violet-900 placeholder:opacity-50 text-dark-violet-900"
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};
