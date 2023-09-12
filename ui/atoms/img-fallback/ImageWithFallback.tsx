import Image, { ImageProps, StaticImageData } from 'next/image';
import fallbackImage from 'public/images/placeholder-image.jpg';
import { useEffect, useState } from 'react';

type Props = ImageProps & {
  fallback?: StaticImageData;
};

export const ImageWithFallback = ({ fallback = fallbackImage, src, ...props }: Props) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image onError={setError as any} src={error ? fallback : src || fallbackImage} {...props} />
  );
};
