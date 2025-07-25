import { style, styleVariants } from '@vanilla-extract/css';

import { fade, slide } from '@/styles/animations.css';
import { vars } from '@/styles/vars.css';

export const mobileMenuBackdropBase = style({
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

export const mobileMenuBackdrop = styleVariants({
  open: [
    mobileMenuBackdropBase,
    {
      animation: `${fade.in} 0.3s ease-in-out forwards`
    }
  ],
  close: [
    mobileMenuBackdropBase,
    {
      animation: `${fade.out} 0.3s ease-in-out forwards`
    }
  ]
});

export const mobileMenuBase = style({
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

export const mobileMenu = styleVariants({
  open: [
    mobileMenuBase,
    {
      animation: `${slide.in.left} 0.3s ease-in-out forwards`
    }
  ],
  close: [
    mobileMenuBase,
    {
      animation: `${slide.out.right} 0.3s ease-in-out forwards`
    }
  ]
});

export const mobileMenuList = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: vars.spacing.sm
});

export const mobileMenuItem = style({
  selectors: {
    '&:last-of-type': {
      marginTop: 'auto'
    }
  }
});

export const mobileMenuLink = style({
  width: '100%'
});
