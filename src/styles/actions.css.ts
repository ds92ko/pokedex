import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xxs,
  backgroundColor: vars.colors.accent,
  color: vars.colors.white,
  fontWeight: vars.fonts.weight.medium,
  opacity: 1,
  transition: 'opacity 0.3s ease-out',
  selectors: {
    '&:not(:disabled):hover': {
      opacity: 0.7
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: vars.colors.border,
      color: vars.colors.text,
      opacity: 0.5
    }
  }
});

export const button = styleVariants({
  sm: [
    buttonBase,
    {
      fontSize: vars.fonts.size.sm,
      padding: `${vars.spacing.xxs} ${vars.spacing.sm}`,
      borderRadius: `calc((${vars.fonts.size.sm} + (${vars.spacing.xxs} * 2)) / 2)`
    }
  ],
  md: [
    buttonBase,
    {
      fontSize: vars.fonts.size.md,
      padding: `${vars.spacing.xs} ${vars.spacing.md}`,
      borderRadius: `calc((${vars.fonts.size.md} + (${vars.spacing.xs} * 2)) / 2)`
    }
  ],
  lg: [
    buttonBase,
    {
      fontSize: vars.fonts.size.lg,
      padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
      borderRadius: `calc((${vars.fonts.size.lg} + (${vars.spacing.sm} * 2)) / 2)`
    }
  ]
});

export const linkBase = style({
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

export const link = styleVariants({
  sm: [
    linkBase,
    {
      fontSize: vars.fonts.size.sm
    }
  ],
  md: [
    linkBase,
    {
      fontSize: vars.fonts.size.md
    }
  ],
  lg: [
    linkBase,
    {
      fontSize: vars.fonts.size.lg
    }
  ]
});
