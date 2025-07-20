import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

import { POKEMON_IMAGE_HOSTNAME, POKEMON_IMAGE_PATHNAME } from '@/constants/api';

const vanillaExtractPlugin = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: POKEMON_IMAGE_HOSTNAME,
        pathname: POKEMON_IMAGE_PATHNAME
      }
    ]
  }
};

export default vanillaExtractPlugin(nextConfig);
