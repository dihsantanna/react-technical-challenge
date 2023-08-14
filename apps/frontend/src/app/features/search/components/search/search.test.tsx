import React from 'react';
import { expect, it, describe, beforeEach, vi } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/react';
import { Search } from './';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
  }),
  useSearchParams: () => vi.fn(),
  usePathname: () => '/',
}));

const SEARCH_TESTID = 'search-input';
const SEARCH_PLACEHOLDER = 'O que você está procurando?';

describe('Search', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Search />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render a search input', async () => {
    const searchInput = await screen.findByTestId(SEARCH_TESTID);

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
  });

  it(`should input have placeholder "${SEARCH_PLACEHOLDER}"`, () => {
    const searchInput = screen.queryByPlaceholderText(SEARCH_PLACEHOLDER);

    expect(searchInput).toBeInTheDocument();
  });
});
