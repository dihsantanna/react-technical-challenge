import React from 'react';
import { useProducts } from '../../actions/useProducts';
import { ProductCard } from '../productCard';

export const ProductList = () => {
  const { products, refElementToLoadMore } = useProducts();

  return (
    <div className="container grid grid-cols-[repeat(auto-fit,minmax(235.9px,1fr))] gap-5 w-max max-w-full">
      {products.map((product, index) => (
        <ProductCard
          refTarget={
            index === products.length - 1 ? refElementToLoadMore : undefined
          }
          productId={product.id}
          key={product.id}
          price={product?.price}
          src={product?.image?.url?.replace(/^(\/|\/){1}/, '')}
          title={product.name}
        />
      ))}
    </div>
  );
};
