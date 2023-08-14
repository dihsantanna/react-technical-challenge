import React from 'react';
import { expect, it, describe, beforeEach, vi } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/react';
import { Header } from './';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
  }),
  useSearchParams: () => vi.fn(),
  usePathname: () => '/',
}));

const HEADER_TESTID = 'header';
const SEARCH_TESTID = 'search-input';

describe('Header', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Header />);
  });

  afterEach(() => {
    renderResult?.unmount();
  });

  it('should render header', () => {
    const header = screen.queryByTestId(HEADER_TESTID);

    expect(header).toBeInTheDocument();
  });

  it('should render logo', () => {
    const logo = screen.queryByRole('img', {
      name: /80 lines logo/i,
    });

    expect(logo).toBeInTheDocument();
  });

  it('should render search input', () => {
    const searchInput = screen.queryByTestId(SEARCH_TESTID);

    expect(searchInput).toBeInTheDocument();
  });
});
