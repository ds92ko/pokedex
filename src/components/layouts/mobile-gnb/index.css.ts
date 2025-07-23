import { style, styleVariants } from '@vanilla-extract/css';

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

export const mobileGnbBackdrop = style({
  position: 'fixed',
  top: vars.layout.header.height,
  left: 0,
  display: 'none',
  width: '100%',
  height: `calc(100dvh - ${vars.layout.header.height})`,
  background: vars.alpha.shadow,
  backdropFilter: 'blur(3px)',
  overflow: 'auto',
  zIndex: 300,
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'block'
    }
  }
});

export const mobileGnb = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  padding: vars.spacing.md,
  background: vars.colors.white,
  boxShadow: `-4px 0 8px ${vars.alpha.shadow}`
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
