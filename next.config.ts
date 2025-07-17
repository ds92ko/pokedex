import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const vanillaExtractPlugin = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.POKEMON_IMAGE_HOSTNAME || 'raw.githubusercontent.com',
        pathname: process.env.POKEMON_IMAGE_PATHNAME || '/PokeAPI/sprites/**'
      }
    ]
  }
};

export default vanillaExtractPlugin(nextConfig);
