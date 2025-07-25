import { style, styleVariants } from '@vanilla-extract/css';

import { fontFamily, vars } from '@/styles/vars.css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: vars.layout.header.height,
  background: vars.colors.white,
  borderBottom: `1px solid ${vars.colors.border}`,
  zIndex: 400
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  height: '100%',
  paddingBlock: vars.spacing.sm
});

export const logo = style({
  flexShrink: 0
});

export const logoLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xs
});

export const logoTextBase = style({
  fontFamily: `${fontFamily.logo}, sans-serif`,
  fontWeight: vars.fonts.weight.medium,
  fontSize: vars.fonts.size.xxl,
  color: vars.colors.secondary,
  WebkitTextStroke: `2px ${vars.colors.accent}`,
  paddingBottom: vars.spacing.xs,
  transition: 'opacity 0.3s ease-out',
  willChange: 'opacity, visibility, width',
  '@media': {
    'screen and (max-width: 480px)': {
      display: 'none'
    }
  }
});

export const logoText = styleVariants({
  open: [
    logoTextBase,
    {
      opacity: 0,
      visibility: 'hidden',
      width: 0
    }
  ],
  close: [
    logoTextBase,
    {
      transitionDelay: '0.3s',
      opacity: 1,
      visibility: 'visible',
      width: 'max-content'
    }
  ]
});
