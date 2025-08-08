import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const guestbookIntroContent = style({
  display: 'grid',
  gap: vars.spacing.md,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media': {
    '(max-width: 1024px)': {
      gridTemplateColumns: '1fr'
    }
  }
});

export const listItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.xs,
  selectors: {
    '&::before': {
      content: '•'
    }
  }
});
