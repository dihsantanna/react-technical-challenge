import Container from '@/core-components/container';
import Text from '@/core-components/text';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  return (
    <Container
      as="nav"
      className="min-h-[32px] mx-0 flex items-center"
      testId="navbar"
    >
      <Link href="" title="volar para o início">
        <HomeIcon className="h-5" />
      </Link>
      <ChevronRightIcon className="h-5 mx-2" />
      <Text variant="h3" className="text-sm font-bold">
        Todos os produtos
      </Text>
    </Container>
  );
};
