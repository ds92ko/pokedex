import { keyframes, style } from '@vanilla-extract/css';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' }
});

export const skeleton = style({
  background: 'linear-gradient(90deg, #eee, #f5f5f5, #eee)',
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s infinite`,
  borderRadius: '4px',
  color: 'transparent'
});
