import React from 'react';
import { expect, it, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '.';

describe('SearchBar', () => {
  beforeEach(() => {
    render(<SearchBar />);
  });
  it('should render a header', async () => {
    const header = await screen.findByTestId('header');

    expect(header).toBeInTheDocument();
  });
  it('should render a logo', async () => {
    const logo = await screen.findByTestId('80lines-logo');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/80lines_logo.svg');
    expect(logo).toHaveAttribute('alt', '80 Lines logo');
  });
  it('should render a search input', async () => {
    const searchInput = await screen.findByTestId('search-input');

    expect(searchInput).toBeInTheDocument();
  });
});
