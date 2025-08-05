import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const datalist = style({
  position: 'relative'
});

export const datalistOptions = style({
  width: '100%',
  maxWidth: `calc(100vw - (${vars.spacing.lg} * 2))`,
  maxHeight: `calc((${vars.fonts.size.md} + (${vars.spacing.xs} * 2)) * 5 + 4px)`,
  fontSize: vars.fonts.size.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md,
  background: vars.colors.white,
  boxShadow: `0 2px 4px ${vars.alpha.shadow}`,
  overflow: 'auto',
  zIndex: 500
});

export const datalistOption = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: vars.spacing.md,
  width: '100%',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  transition: 'background 0.3s ease-out, color 0.3s ease-out',
  selectors: {
    '&:hover, &:active, &:focus, &[aria-selected=true]': {
      background: vars.colors.background
    },
    [`${datalistOptions} > li:not(:last-of-type) &`]: {
      borderBottom: `1px solid ${vars.colors.border}`
    }
  }
});

export const datalistValue = style({
  color: vars.colors.caption
});
