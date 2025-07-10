import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const vanillaExtractPlugin = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default vanillaExtractPlugin(nextConfig);
