import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const pokemonCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: vars.spacing.md,
  padding: vars.spacing.lg,
  background: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md,
  transition: 'box-shadow 0.3s ease-out, transform 0.3s ease-out',
  selectors: {
    '&:hover': {
      boxShadow: `0 4px 12px ${vars.alpha.shadow}`,
      transform: 'scale3d(1.02, 1.02, 1)'
    },
    '&.legendary': {
      background: vars.gradient.category.legendary
    },
    '&.mythical': {
      background: vars.gradient.category.mythical
    }
  }
});

export const pokemonCardBadge = style({
  position: 'absolute',
  top: `calc(${vars.spacing.sm} * -1)`,
  right: `calc(${vars.spacing.sm} * -1)`,
  zIndex: 20
});

export const pokemonCardImage = style({
  position: 'relative',
  width: '100%',
  height: 'auto',
  aspectRatio: '1 / 1',
  zIndex: 10
});

export const pokemonCardText = style({
  position: 'relative',
  zIndex: 10
});

export const pokemonCardNumber = style({
  display: 'inline-block',
  color: vars.colors.accent,
  fontSize: vars.fonts.size.sm,
  fontWeight: vars.fonts.weight.medium
});

export const pokemonCardTitle = style({
  color: vars.colors.caption,
  fontSize: vars.fonts.size.md,
  marginTop: vars.spacing.xxs,
  marginBottom: vars.spacing.xs
});

export const pokemonCardName = style({
  color: vars.colors.text,
  fontSize: vars.fonts.size.lg,
  fontWeight: vars.fonts.weight.bold
});
