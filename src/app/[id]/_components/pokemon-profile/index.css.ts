import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const buttonGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs
});

export const infoContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xl,
  '@media': {
    'screen and (max-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: vars.spacing.lg
    }
  }
});

export const imageBox = style({
  flexShrink: 0,
  position: 'relative',
  width: 382,
  height: '100%',
  aspectRatio: '1 / 1',
  borderRadius: vars.spacing.sm,
  overflow: 'hidden',
  background: vars.colors.background,
  selectors: {
    '&.legendary': {
      background: vars.gradient.category.legendary
    },
    '&.mythical': {
      background: vars.gradient.category.mythical
    }
  },
  '@media': {
    'screen and (max-width: 1024px)': {
      width: '100%',
      maxHeight: 352
    }
  }
});

export const pokemonImage = style({
  objectFit: 'contain'
});

export const textBox = style({
  flexGrow: 1
});

export const pokemonNumber = style({
  display: 'inline-block',
  color: vars.colors.caption,
  fontWeight: vars.fonts.weight.medium
});

export const pokemonName = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  fontSize: vars.fonts.size.xxl,
  fontWeight: vars.fonts.weight.bold,
  marginBlock: vars.spacing.xxs
});

export const pokemonDescription = style({
  fontSize: vars.fonts.size.lg
});

export const descriptionList = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto 1fr',
  gridAutoRows: 'minmax(60px, auto)',
  border: `1px solid ${vars.colors.border}`,
  overflow: 'hidden',
  borderRadius: vars.spacing.sm,
  marginBlock: vars.spacing.lg,
  '@media': {
    'screen and (max-width: 640px)': {
      gridTemplateColumns: 'auto 1fr'
    }
  }
});

export const descriptionTerm = style({
  padding: vars.spacing.sm,
  minWidth: 70,
  textAlign: 'center',
  fontWeight: vars.fonts.weight.medium,
  borderRight: `1px solid ${vars.colors.border}`,
  background: vars.colors.background,
  selectors: {
    '&:nth-of-type(even)': {
      borderLeft: `1px solid ${vars.colors.border}`
    },
    '&:not(:nth-of-type(5), :nth-of-type(6))': {
      borderBottom: `1px solid ${vars.colors.border}`
    }
  },
  '@media': {
    'screen and (max-width: 640px)': {
      selectors: {
        '&:nth-of-type(even)': {
          borderLeft: 0
        },
        '&:nth-of-type(5)': {
          borderBottom: `1px solid ${vars.colors.border}`
        }
      }
    }
  }
});

export const descriptionDetails = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.spacing.xs,
  padding: vars.spacing.sm,
  selectors: {
    '&:not(:nth-of-type(5), :nth-of-type(6))': {
      borderBottom: `1px solid ${vars.colors.border}`
    }
  },
  '@media': {
    'screen and (max-width: 640px)': {
      selectors: {
        '&:nth-of-type(5)': {
          borderBottom: `1px solid ${vars.colors.border}`
        }
      }
    }
  }
});

export const pokemonAbility = style({
  display: 'inline-flex',
  alignItems: 'center'
});
