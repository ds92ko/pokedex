import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const guestbookForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  paddingBlock: vars.spacing.sm,
  width: '100%'
});
