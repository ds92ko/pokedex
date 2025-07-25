import { style, styleVariants } from '@vanilla-extract/css';

export const mobileMenuButtonBase = style({
  position: 'relative',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  willChange: 'opacity, visibility',
  zIndex: 100,
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'flex'
    }
  }
});

export const mobileMenuButton = styleVariants({
  open: [
    mobileMenuButtonBase,
    {
      opacity: 0,
      visibility: 'hidden'
    }
  ],
  close: [
    mobileMenuButtonBase,
    {
      transitionDelay: '0.3s',
      opacity: 1,
      visibility: 'visible'
    }
  ]
});
