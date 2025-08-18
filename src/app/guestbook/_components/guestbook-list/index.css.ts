import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const guestbookList = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing.lg
});
