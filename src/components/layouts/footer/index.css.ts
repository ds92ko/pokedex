import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const footer = style({
  position: 'relative',
  zIndex: 200
});

export const content = style({
  paddingBottom: vars.spacing.xl
});

export const copyright = style({
  color: vars.colors.caption,
  fontWeight: vars.fonts.weight.medium,
  marginBottom: vars.spacing.sm
});
