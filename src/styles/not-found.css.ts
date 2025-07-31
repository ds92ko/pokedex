import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const notFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xxl,
  height: `calc(100dvh - ${vars.layout.header.height} - ${vars.layout.section.spacing.onlyContent})`,
  textAlign: 'center'
});

export const notFoundTitle = style({
  fontSize: vars.fonts.size.xxl,
  fontWeight: vars.fonts.weight.bold,
  marginBottom: vars.spacing.md
});

export const notFoundDescription = style({
  fontSize: vars.fonts.size.lg,
  fontWeight: vars.fonts.weight.medium,
  color: vars.colors.caption
});
