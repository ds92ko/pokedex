import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const gnbBase = style({
  position: 'relative',
  transition: 'opacity 0.3s ease-out',
  willChange: 'opacity, visibility',
  zIndex: 100,
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'none'
    }
  }
});

export const gnb = styleVariants({
  open: [
    gnbBase,
    {
      opacity: 0,
      visibility: 'hidden'
    }
  ],
  close: [
    gnbBase,
    {
      transitionDelay: '0.3s',
      opacity: 1,
      visibility: 'visible'
    }
  ]
});

export const gnbList = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md
});
