import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.colors.accent,
  color: vars.colors.white,
  border: '1px solid transparent',
  fontWeight: vars.fonts.weight.medium,
  transition: 'background 0.3s ease-out, color 0.3s ease-out',
  selectors: {
    '&.outline': {
      background: vars.colors.white,
      color: vars.colors.accent,
      border: `1px solid ${vars.colors.accent}`
    },
    '&:not(:disabled):hover': {
      background: vars.alpha.accent
    },
    '&.outline:not(:disabled):hover': {
      background: vars.alpha.accentSoft
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: vars.colors.background,
      color: vars.alpha.text
    },
    '&.outline:disabled': {
      borderColor: vars.colors.border
    }
  }
});

export const button = styleVariants({
  sm: [
    buttonBase,
    {
      gap: vars.spacing.xxs,
      fontSize: vars.fonts.size.sm,
      padding: `${vars.spacing.xxs} ${vars.spacing.sm}`,
      borderRadius: `calc((${vars.fonts.size.sm} + (${vars.spacing.xxs} * 2)) / 2)`
    }
  ],
  md: [
    buttonBase,
    {
      gap: vars.spacing.xxs,
      fontSize: vars.fonts.size.md,
      padding: `${vars.spacing.xs} ${vars.spacing.md}`,
      borderRadius: `calc((${vars.fonts.size.md} + (${vars.spacing.xs} * 2)) / 2)`
    }
  ],
  lg: [
    buttonBase,
    {
      gap: vars.spacing.xs,
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
  transition: 'color 0.3s ease-out',
  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: 2,
      background: vars.colors.accent,
      transition: 'background 0.3s ease-out'
    },
    '&:hover': {
      color: vars.alpha.accent
    },
    '&:hover::after': {
      background: vars.alpha.accent
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
