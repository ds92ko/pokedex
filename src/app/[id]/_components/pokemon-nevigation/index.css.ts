import { style } from '@vanilla-extract/css';

import { POKEMON_NAV_IMAGE_SIZE } from '@/app/[id]/_components/pokemon-nevigation/constants';
import { vars } from '@/styles/vars.css';

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
    '&:hover, &:active, &:focus, &.disabled': {
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
    },
    [`${pokemonNavItem}.disabled &`]: {
      cursor: 'not-allowed'
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

export const NeighboringPokemonName = style({
  display: 'inline-block'
});
