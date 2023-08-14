import React from 'react';
import { expect, it, describe, beforeEach, vi } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/react';
import { ProductCard } from './';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
  }),
  useSearchParams: () => vi.fn(),
  usePathname: () => '/',
}));

describe('ProductCard', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <ProductCard productId={1} price={10} title="Product 1" src="testing" />,
    );
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render a product card', () => {
    const productCard = screen.queryByTestId('product-card-1');

    expect(productCard).toBeInTheDocument();
  });

  it('should render a product image', () => {
    const image = screen.queryByAltText('Imagem do produto Product 1');

    expect(image).toBeInTheDocument();
  });

  it('should render a product title', () => {
    const title = screen.queryByText('Product 1');

    expect(title).toBeInTheDocument();
  });

  it('should render a product price', () => {
    const price = screen.queryByText('R$ 10,00');

    expect(price).toBeInTheDocument();
  });
});
