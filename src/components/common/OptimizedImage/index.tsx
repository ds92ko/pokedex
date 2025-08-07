'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export default function OptimizedImage({ src, width, height, alt, ...props }: ImageProps) {
  const [fallback, setFallback] = useState(false);

  const rawLoader = ({ src }: { src: string }) => src;
  const handleError = () => setFallback(true);

  return fallback ? (
    <Image
      loader={rawLoader}
      src={src}
      width={width}
      height={height}
      alt={alt}
      unoptimized
      {...props}
    />
  ) : (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}
