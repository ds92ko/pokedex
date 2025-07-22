import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const container = style({
  maxWidth: '1200px',
  width: '100%',
  height: '100%',
  margin: '0 auto',
  paddingInline: vars.spacing.lg
});
