import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xxs,
  width: '100%'
});

export const fieldLabel = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.xxs
});

export const fieldCount = style({
  textAlign: 'right',
  color: vars.colors.caption,
  fontSize: vars.fonts.size.xs
});

export const countValue = style({
  color: vars.colors.accent,
  fontWeight: vars.fonts.weight.medium
});

export const fieldInfo = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.xxs,
  color: vars.colors.caption,
  fontSize: vars.fonts.size.xs,
  selectors: {
    [`${field}.error &`]: {
      color: vars.colors.primary
    }
  }
});

export const fieldInfoMessage = style({
  flexGrow: 1
});
