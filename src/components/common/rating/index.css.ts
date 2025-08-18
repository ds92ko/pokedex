import { style } from '@vanilla-extract/css';

export const stars = style({
  display: 'flex'
});

export const star = style({
  position: 'relative',
  transition: 'transform 0.3s ease-out',
  selectors: {
    '&:not(:disabled):hover': {
      transform: 'scale(1.1)'
    }
  }
});

export const starIcon = style({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  transition: 'opacity 0.3s ease-out',
  selectors: {
    '&.active': {
      opacity: 1
    }
  }
});
