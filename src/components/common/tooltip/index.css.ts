import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const tooltip = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xxs
});

export const tooltipButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.accent,
  selectors: {
    '&:hover, &:focus': {
      color: vars.alpha.accent
    },
    '&:disabled': {
      color: vars.alpha.text,
      cursor: 'not-allowed'
    }
  }
});

export const tooltipPopup = style({
  width: 'max-content',
  maxWidth: `calc(100vw - (${vars.spacing.lg} * 2))`,
  fontSize: vars.fonts.size.xxs,
  paddingBlock: vars.spacing.xxs,
  paddingInline: vars.spacing.sm,
  borderRadius: `calc((${vars.fonts.size.xxs} + (${vars.spacing.xxs} * 2)) / 2)`,
  border: `1px solid ${vars.colors.border}`,
  background: vars.colors.background,
  boxShadow: `0 2px 4px ${vars.alpha.shadow}`,
  zIndex: 500
});
