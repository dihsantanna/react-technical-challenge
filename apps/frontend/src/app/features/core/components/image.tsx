import NextImage, { ImageProps } from 'next/image';

const Image = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}: ImageProps) => {
  if (!src) {
    return (
      <div className={`${className} bg-gray-200`} style={{ width, height }} />
    );
  }

  return (
    <NextImage
      {...props}
      alt={alt || ''}
      className={className}
      src={
        src === 'testing'
          ? '/80lines_logo.svg'
          : `${process.env.NEXT_PUBLIC_IMAGES_URL}/${src}`
      }
      layout="fixed"
      width={width}
      height={height}
    />
  );
};

export default Image;
