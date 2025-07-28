import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const inputBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.md,
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: `calc((${vars.fonts.size.md} + (${vars.spacing.xs} * 2)) / 2)`,
  background: vars.colors.white,
  width: '100%',
  selectors: {
    '&.disabled': {
      background: vars.colors.background,
      color: vars.alpha.text
    }
  }
});

export const inputAddon = style({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center'
});

export const inputField = style({
  flexGrow: 1,
  width: '100%'
});
