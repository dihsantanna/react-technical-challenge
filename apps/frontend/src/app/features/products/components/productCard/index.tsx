import Image from '@/features/core/components/image';
import React from 'react';

interface ProductCardProps {
  src: string;
  price: number;
  title: string;
  productId: number;
  className?: string;
  refTarget?: React.RefObject<HTMLDivElement | null>;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  src,
  price,
  title,
  productId,
  className,
  refTarget,
}) => {
  return (
    <div
      id={`card-product-${productId}`}
      ref={refTarget}
      data-testid={`product-card-${productId}`}
      className={`h-[310px] w-[235.9px] px-4 pt-2 bg-white ${className}`}
    >
      <div className="overflow-hidden h-[200px] w-[214.5px] relative">
        <Image
          src={src}
          alt={`Imagem do produto ${title}`}
          className="m-auto"
          fill
        />
      </div>
      <p className="font-bold text-base leading-5 text-zinc-800 mt-4 mb-1">
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </p>
      <p className="h-53px text-base text-gray-500 leading-6">{title}</p>
    </div>
  );
};
