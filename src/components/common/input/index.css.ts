import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const inputBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: `calc((${vars.fonts.size.md} + (${vars.spacing.xs} * 2)) / 2)`,
  background: vars.colors.white
});

export const inputAddonBase = style({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center'
});

export const inputAddon = styleVariants({
  start: [
    inputAddonBase,
    {
      paddingLeft: vars.spacing.md
    }
  ],
  end: [
    inputAddonBase,
    {
      paddingRight: vars.spacing.md
    }
  ]
});

export const inputField = style({
  flexGrow: 1,
  width: '100%',
  paddingInline: vars.spacing.md,
  marginBlock: vars.spacing.xs
});
