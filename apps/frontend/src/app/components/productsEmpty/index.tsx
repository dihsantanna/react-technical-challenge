import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Loading } from '../loading';

interface ProductEmptyProps {
  loading: boolean;
}

export const ProductsEmpty: React.FC<ProductEmptyProps> = ({ loading }) => {
  return (
    <div className="w-screen max-w-full bg-white rounded-lg flex items-center justify-center flex-col gap-4 min-h-[500px] h-full col-span-full font-semibold text-lg">
      {loading ? (
        <Loading />
      ) : (
        <>
          Não há produtos
          <ShoppingBagIcon className="text-dark-violet-500" width="50" />
        </>
      )}
    </div>
  );
};
