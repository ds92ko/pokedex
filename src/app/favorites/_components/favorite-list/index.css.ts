import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const favoriteList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.spacing.lg,
  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    'screen and (max-width: 640px)': {
      gridTemplateColumns: 'repeat(1, 1fr)'
    }
  }
});
