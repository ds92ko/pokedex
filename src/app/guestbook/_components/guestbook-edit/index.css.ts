import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const guestbookEdit = style({
  position: 'relative',
  width: '100%'
});

export const guestbookEditPending = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  width: '100%',
  height: '100%',
  zIndex: 100
});

export const guestbookEditFieldset = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  paddingBlock: vars.spacing.sm,
  width: '100%',
  selectors: {
    '&.pending': {
      opacity: 0.5
    }
  }
});
