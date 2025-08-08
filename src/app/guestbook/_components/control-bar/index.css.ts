import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const controlBar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: vars.spacing.xs
});
