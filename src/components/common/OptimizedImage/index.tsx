'use client';

import Image, { ImageProps } from 'next/image';

export default function OptimizedImage({ src, width, height, alt, ...props }: ImageProps) {
  const isExternal = typeof src === 'string' && src.startsWith('http');
  const imageWidth = isExternal ? (typeof width === 'number' ? width : 300) : width;
  const proxiedSrc = isExternal
    ? `/api/image-proxy?url=${encodeURIComponent(src)}&width=${imageWidth}`
    : src;

  const rawLoader = ({ src }: { src: string }) => src;

  return (
    <Image
      loader={isExternal ? rawLoader : undefined}
      unoptimized={isExternal}
      src={proxiedSrc}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
  );
}
