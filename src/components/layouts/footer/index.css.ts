import { style } from '@vanilla-extract/css';

import { fontFamily, vars } from '@/styles/vars.css';

export const footer = style({
  position: 'relative',
  background: vars.colors.background,
  zIndex: 200
});

export const content = style({
  paddingBlock: vars.spacing.xxl,
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  columnGap: vars.spacing.xxl,
  rowGap: vars.spacing.lg
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs
});

export const logoText = style({
  fontFamily: `${fontFamily.logo}, sans-serif`,
  fontWeight: vars.fonts.weight.medium,
  fontSize: vars.fonts.size.xxl,
  color: vars.colors.secondary,
  WebkitTextStroke: `2px ${vars.colors.accent}`,
  paddingBottom: vars.spacing.xs,
  transition: 'opacity 0.3s ease-out'
});

export const copyright = style({
  color: vars.colors.caption,
  fontWeight: vars.fonts.weight.medium,
  marginBottom: vars.spacing.sm
});
