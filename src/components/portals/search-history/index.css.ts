import { style, styleVariants } from '@vanilla-extract/css';

import { fade } from '@/styles/animations.css';
import { vars } from '@/styles/vars.css';

export const searchHistoryBase = style({
  position: 'fixed',
  top: vars.layout.header.height,
  left: 0,
  width: '100%',
  height: `calc(100dvh - ${vars.layout.header.height})`,
  background: vars.colors.white,
  overflow: 'auto',
  opacity: 0,
  willChange: 'opacity',
  zIndex: 300
});

export const searchHistory = styleVariants({
  open: [
    searchHistoryBase,
    {
      animation: `${fade.in} 0.3s ease-in-out forwards`
    }
  ],
  close: [
    searchHistoryBase,
    {
      animation: `${fade.out} 0.3s ease-in-out forwards`
    }
  ]
});
