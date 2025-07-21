import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const gnbBase = style({
  position: 'relative',
  transition: 'opacity 0.3s ease-out',
  zIndex: 100
});

export const gnb = styleVariants({
  open: [
    gnbBase,
    {
      opacity: 0
    }
  ],
  close: [
    gnbBase,
    {
      transitionDelay: '0.3s',
      opacity: 1
    }
  ]
});

export const gnbList = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md
});
