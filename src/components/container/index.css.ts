import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  paddingInline: vars.spacing.lg
});
