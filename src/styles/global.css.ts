import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xxs,
  backgroundColor: vars.colors.accent,
  color: vars.colors.white,
  fontWeight: vars.fonts.weight.medium,
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  borderRadius: `calc((${vars.fonts.size.md} + (${vars.spacing.xs} * 2)) / 2)`,
  opacity: 1,
  transition: 'opacity 0.3s ease-out',
  selectors: {
    '&:hover': {
      opacity: 0.7
    }
  }
});

export const link = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xxs,
  color: vars.colors.accent,
  opacity: 1,
  transition: 'opacity 0.3s ease-out',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: 2,
      backgroundColor: vars.colors.accent
    },
    '&:hover': {
      opacity: 0.7
    }
  }
});
