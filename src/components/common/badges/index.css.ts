import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const badgeList = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  flexWrap: 'wrap'
});

export const badgeItem = style({
  fontSize: vars.fonts.size.xxs,
  fontWeight: vars.fonts.weight.medium,
  paddingBlock: vars.spacing.xxs,
  paddingInline: vars.spacing.sm,
  borderRadius: `calc((${vars.fonts.size.xxs} + (${vars.spacing.xxs} * 2)) / 2)`
});
