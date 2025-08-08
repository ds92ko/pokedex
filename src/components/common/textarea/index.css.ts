import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const textarea = style({
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: `calc((${vars.fonts.size.md} + (${vars.spacing.xs} * 2)) / 2)`,
  background: vars.colors.white,
  flexGrow: 1,
  width: '100%',
  selectors: {
    '&:disabled': {
      background: vars.colors.background,
      color: vars.alpha.text
    }
  }
});
