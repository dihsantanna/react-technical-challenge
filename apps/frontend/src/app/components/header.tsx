import Container from '@/core-components/container';
import { Search } from '@/features/search/components/search';
import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <Container
      as="header"
      className="bg-gradient-to-br from-header-violet-matte from-0% via-dark-violet-700 via-60% to-header-violet-700 min-w-full"
      testId="header"
    >
      <Container className="flex-col gap-4 items-center py-5 px-16 flex sm:flex-row justify-between max-w-[1440px] mx-auto">
        <Image
          data-testid="80lines-logo"
          src="/80lines_logo.svg"
          alt="80 Lines logo"
          width="124"
          height="32"
        />
        <Search />
      </Container>
    </Container>
  );
};
