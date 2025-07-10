import { Fredoka, Press_Start_2P } from 'next/font/google';

export const pressStart2p = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
  display: 'swap'
});

export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fredoka',
  display: 'swap'
});
