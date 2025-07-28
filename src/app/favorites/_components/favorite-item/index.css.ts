import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const favoriteCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: vars.spacing.md,
  padding: vars.spacing.lg,
  background: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md,
  selectors: {
    '&.legendary': {
      background: vars.gradient.category.legendary
    },
    '&.mythical': {
      background: vars.gradient.category.mythical
    }
  }
});

export const favoriteCardImage = style({
  position: 'relative',
  width: '100%',
  height: 'auto',
  aspectRatio: '1 / 1',
  zIndex: 10
});

export const favoriteCardText = style({
  position: 'relative',
  zIndex: 10
});

export const favoriteCardNumber = style({
  display: 'inline-block',
  color: vars.colors.accent,
  fontSize: vars.fonts.size.sm,
  fontWeight: vars.fonts.weight.medium
});

export const favoriteCardTitle = style({
  color: vars.colors.text,
  fontSize: vars.fonts.size.lg,
  fontWeight: vars.fonts.weight.bold,
  marginTop: vars.spacing.xxs,
  marginBottom: vars.spacing.xs
});

export const favoriteCardName = style({
  color: vars.colors.text,
  fontSize: vars.fonts.size.lg,
  fontWeight: vars.fonts.weight.bold
});

export const buttonGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.xs
});
