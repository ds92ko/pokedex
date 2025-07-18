import { Cherry_Bomb_One, Dongle } from 'next/font/google';

export const cherryBombOne = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cherry-bomb-one',
  display: 'swap'
});

export const dongle = Dongle({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-dongle',
  display: 'swap'
});
