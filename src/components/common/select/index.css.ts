import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const select = style({
  position: 'relative',
  display: 'inline-flex',
  width: 154
});

export const selectField = style({
  flex: 1
});

export const selectOptions = style({
  width: '100%',
  maxWidth: `calc(100vw - (${vars.spacing.lg} * 2))`,
  fontSize: vars.fonts.size.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md,
  background: vars.colors.white,
  boxShadow: `0 2px 4px ${vars.alpha.shadow}`,
  overflow: 'hidden',
  zIndex: 500
});

export const selectOption = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  width: '100%',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  transition: 'background 0.3s ease-out, color 0.3s ease-out',
  selectors: {
    '&:hover, &:focus, &:active': {
      background: vars.colors.background
    },
    '&.selected': {
      color: vars.colors.accent
    }
  }
});
