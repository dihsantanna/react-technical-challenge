import { classNameBuilder } from '@/helpers/class-name-builder';
import React from 'react';

export interface ContainerProps {
  as?: 'div' | 'header' | 'footer' | 'section' | 'aside';
  className?: string;
  children: React.ReactNode;
  testId?: string;
}
const Container: React.FC<ContainerProps> = ({
  as = 'div',
  className,
  children,
  testId,
}) => {
  const DynamicTag = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <DynamicTag
      className={classNameBuilder(
        'container mx-auto px-sm sm:px-md md:px-lg lg:px-xl',
        className,
      )}
      data-testid={testId}
    >
      {children}
    </DynamicTag>
  );
};

export default Container;
