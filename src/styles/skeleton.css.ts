import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' }
});

export const skeleton = style({
  background: vars.gradient.skeleton,
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s infinite`,
  borderRadius: '4px',
  color: 'transparent !important'
});
