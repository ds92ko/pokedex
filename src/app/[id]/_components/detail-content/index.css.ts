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
  width: 352,
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
  color: vars.colors.caption,
  fontWeight: vars.fonts.weight.medium
});

export const pokemonName = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  fontSize: vars.fonts.size.xxl,
  fontWeight: vars.fonts.weight.bold
});

export const pokemonDescription = style({
  fontSize: vars.fonts.size.lg
});

export const descriptionList = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto 1fr',
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

export const evolutionList = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1%',
  '@media': {
    'screen and (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: vars.spacing.sm
    }
  }
});

export const evolutionSeparator = style({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.caption,
  '@media': {
    'screen and (max-width: 480px)': {
      transform: 'rotate(90deg)'
    }
  }
});

export const evolutionItem = style({
  flexGrow: 1
});

export const evolutionCard = style({
  display: 'block',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.sm,
  paddingBlock: vars.spacing.sm,
  paddingInline: vars.spacing.md,
  transition: `box-shadow 0.3s ease-out`,
  selectors: {
    '&:hover': {
      boxShadow: `0 2px 4px ${vars.alpha.shadow}`
    },
    '&.current': {
      borderColor: vars.colors.secondary,
      background: vars.alpha.secondary
    }
  }
});

export const evolutionImage = style({
  width: '100%',
  height: 'auto',
  aspectRatio: '1 / 1'
});

export const evolutionText = style({
  display: 'block',
  color: vars.colors.caption,
  fontSize: vars.fonts.size.sm
});

export const evolutionPokemon = style({
  display: 'block',
  color: vars.colors.text,
  fontSize: vars.fonts.size.md,
  fontWeight: vars.fonts.weight.medium
});

export const pokemonNav = style({});
export const pokemonNavList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.spacing.md
});

export const pokemonNavItem = style({
  border: `1px solid ${vars.colors.border}`,
  selectors: {
    '&:nth-of-type(2)': {
      textAlign: 'center'
    },
    '&:nth-of-type(3)': {
      textAlign: 'right'
    }
  }
});
