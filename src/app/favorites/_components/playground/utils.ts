import { GetRandomPosition } from '@/app/favorites/_components/playground/types';

export const getRandomPosition: GetRandomPosition = (maxX, maxY) => ({
  x: Math.random() * maxX,
  y: Math.random() * maxY
});
