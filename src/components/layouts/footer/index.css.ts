import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const footer = style({
  position: 'relative',
  background: vars.colors.background,
  zIndex: 200
});

export const content = style({
  paddingBlock: vars.spacing.xxl
});

export const copyright = style({
  color: vars.colors.caption,
  fontWeight: vars.fonts.weight.medium,
  marginBottom: vars.spacing.sm
});
