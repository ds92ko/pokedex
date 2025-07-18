import { style } from '@vanilla-extract/css';

import { fontFamily, vars } from '@/styles/vars.css';

export const header = style({
  borderBottom: `1px solid ${vars.colors.border}`
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  paddingBlock: vars.spacing.sm
});

export const logo = style({
  fontFamily: `${fontFamily.logo}, sans-serif`,
  fontWeight: vars.fonts.weight.medium,
  fontSize: vars.fonts.size.xxl,
  color: vars.colors.secondary,
  WebkitTextStroke: `2px ${vars.colors.accent}`,
  paddingBottom: vars.spacing.xs
});

export const globalBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm
});

export const searchBar = style({
  width: 135
});

export const gnb = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md
});
