import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const statusBar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.xs
});

export const lifeGauge = style({
  display: 'flex',
  alignItems: 'center'
});

export const quizCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xxs,
  color: vars.colors.caption,
  fontWeight: vars.fonts.weight.medium
});

export const countNumber = style({
  fontWeight: vars.fonts.weight.bold,
  selectors: {
    '&:first-of-type': {
      color: vars.colors.primary
    },
    '&:last-of-type': {
      color: vars.colors.accent
    }
  }
});

export const questionArea = style({
  marginBlock: vars.spacing.lg
});

export const questionImageBox = style({
  position: 'relative',
  background: vars.colors.background,
  borderRadius: vars.spacing.sm,
  padding: vars.spacing.sm
});

export const loadingMessage = style({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: vars.spacing.sm,
  textAlign: 'center'
});

export const pokemonImageSize = `calc(
  100vh
  - ${vars.layout.header.height}
  - ${vars.layout.section.spacing.hasTitle}
  - ${vars.layout.input.height}
  - ${vars.layout.button.height.md}
  - ${vars.layout.button.height.lg}
  - (${vars.spacing.lg} * 2)
  - ${vars.spacing.md}
  - (${vars.spacing.sm} * 4)
  - ${vars.fonts.size.xl}
  - ${vars.fonts.size.md}
)`;

export const pokemonImage = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  maxWidth: pokemonImageSize,
  maxHeight: pokemonImageSize,
  aspectRatio: '1 / 1',
  marginInline: 'auto',
  objectFit: 'contain'
});

export const questionText = style({
  marginTop: vars.spacing.md,
  fontSize: vars.fonts.size.xl,
  fontWeight: vars.fonts.weight.medium
});

export const quizForm = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.spacing.sm,
  '@media': {
    'screen and (max-width: 640px)': {
      flexDirection: 'column',
      alignItems: 'stretch'
    }
  }
});

export const quizInputBox = style({
  flexGrow: 1
});

export const quizInputError = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  color: vars.colors.primary,
  fontSize: vars.fonts.size.sm,
  marginTop: vars.spacing.xs
});

export const buttonGroup = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.xs
});

export const catchPokemonButton = style({
  width: '100%',
  marginTop: vars.spacing.sm
});
