import { style } from '@vanilla-extract/css';

export const stars = style({
  display: 'flex',
  alignItems: 'center'
});

export const starInput = style({
  display: 'none'
});

export const star = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease-out'
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
