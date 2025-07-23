import { style, styleVariants } from '@vanilla-extract/css';

import { fade, slide } from '@/styles/animations.css';
import { vars } from '@/styles/vars.css';

export const mobileGnbButtonBase = style({
  position: 'relative',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'flex'
    }
  }
});

export const mobileGnbButton = styleVariants({
  open: [
    mobileGnbButtonBase,
    {
      opacity: 0,
      visibility: 'hidden'
    }
  ],
  close: [
    mobileGnbButtonBase,
    {
      transitionDelay: '0.3s',
      opacity: 1,
      visibility: 'visible'
    }
  ]
});

export const mobileGnbBackdropBase = style({
  position: 'fixed',
  top: vars.layout.header.height,
  left: 0,
  display: 'none',
  width: '100%',
  height: `calc(100dvh - ${vars.layout.header.height})`,
  background: vars.alpha.shadow,
  backdropFilter: 'blur(3px)',
  overflow: 'hidden',
  opacity: 0,
  willChange: 'opacity',
  zIndex: 300,
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'block'
    }
  }
});

export const mobileGnbBackdrop = styleVariants({
  open: [
    mobileGnbBackdropBase,
    {
      animation: `${fade.in} 0.3s ease-in-out forwards`
    }
  ],
  close: [
    mobileGnbBackdropBase,
    {
      animation: `${fade.out} 0.3s ease-in-out forwards`
    }
  ]
});

export const mobileGnbBase = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  padding: vars.spacing.md,
  background: vars.colors.white,
  boxShadow: `-4px 0 8px ${vars.alpha.shadow}`,
  transform: 'translateX(100%)',
  willChange: 'transform'
});

export const mobileGnb = styleVariants({
  open: [
    mobileGnbBase,
    {
      animation: `${slide.in.left} 0.3s ease-in-out forwards`
    }
  ],
  close: [
    mobileGnbBase,
    {
      animation: `${slide.out.right} 0.3s ease-in-out forwards`
    }
  ]
});

export const mobileGnbList = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: vars.spacing.sm
});

export const mobileGnbItem = style({
  selectors: {
    '&:last-of-type': {
      marginTop: 'auto'
    }
  }
});

export const mobileGnbLink = style({
  width: '100%'
});
