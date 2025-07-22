import { style } from '@vanilla-extract/css';

import { POKEMON_NAV_IMAGE_SIZE } from '@/app/[id]/_components/detail-content/constants';
import { icons, vars } from '@/styles/vars.css';

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

const evolutionListGap = '1%';

export const evolutionList = style({
  display: 'flex',
  alignItems: 'center',
  gap: evolutionListGap,
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
  flexGrow: 1,
  maxWidth: `calc((100% - (${evolutionListGap} * 4) - (${icons.size.lg} * 2)) / 3)`,
  '@media': {
    'screen and (max-width: 480px)': {
      maxWidth: '100%'
    }
  }
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
      boxShadow: `0 4px 12px ${vars.alpha.shadow}`
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

export const pokemonNavList = style({
  display: 'grid',
  gridTemplateColumns: '1fr minmax(20%, auto) 1fr'
});

export const pokemonNavItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.colors.white}`,
  padding: vars.spacing.sm,
  background: vars.colors.accent,
  color: vars.colors.white,
  transition: `background 0.3s ease-out`,
  selectors: {
    '&:hover': {
      background: vars.alpha.accent
    },
    '&:not(:first-of-type)': {
      borderLeft: 0
    },
    '&:first-of-type': {
      borderRadius: `${POKEMON_NAV_IMAGE_SIZE}px 0 0 ${POKEMON_NAV_IMAGE_SIZE}px`
    },
    '&:nth-of-type(2)': {
      textAlign: 'center'
    },
    '&:last-of-type': {
      textAlign: 'right',
      borderRadius: `0 ${POKEMON_NAV_IMAGE_SIZE}px ${POKEMON_NAV_IMAGE_SIZE}px 0`
    }
  }
});

export const pokemonNavLink = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  fontWeight: vars.fonts.weight.medium,
  selectors: {
    [`${pokemonNavItem}:nth-of-type(2) &`]: {
      justifyContent: 'center'
    },
    [`${pokemonNavItem}:last-of-type &`]: {
      flexDirection: 'row-reverse'
    }
  }
});

export const pokemonNavLinkImage = style({
  background: vars.colors.white,
  borderRadius: '50%',
  padding: vars.spacing.xs,
  width: POKEMON_NAV_IMAGE_SIZE,
  height: POKEMON_NAV_IMAGE_SIZE,
  '@media': {
    'screen and (max-width: 480px)': {
      padding: vars.spacing.xxs,
      width: 50,
      height: 50
    }
  }
});

export const pokemonNavLinkText = style({
  '@media': {
    'screen and (max-width: 480px)': {
      display: 'none'
    }
  }
});

export const pokemonNavLinkSpan = style({
  display: 'inline-block',
  width: '100%',
  fontSize: vars.fonts.size.sm,
  fontWeight: vars.fonts.weight.normal
});
