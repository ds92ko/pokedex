import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const globalBar = style({
  flexGrow: 1,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.spacing.sm
});
