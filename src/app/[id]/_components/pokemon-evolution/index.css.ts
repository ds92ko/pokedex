import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const evolutionTable = style({
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.sm,
  background: `linear-gradient(
    to right,
    ${vars.colors.white} 0,
    ${vars.colors.white} calc(33.33% - 1px),
    ${vars.colors.border} calc(33.33% - 1px),
    ${vars.colors.border} calc(33.33%),
    ${vars.colors.white} calc(33.33%),
    ${vars.colors.white} calc(66.66% - 1px),
    ${vars.colors.border} calc(66.66% - 1px),
    ${vars.colors.border} calc(66.66%),
    ${vars.colors.white} calc(66.66%),
    ${vars.colors.white} 100%
  )`,
  contain: 'paint'
});

export const evolutionTHead = style({
  position: 'sticky',
  top: vars.layout.header.height,
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  background: vars.colors.background,
  fontWeight: vars.fonts.weight.medium,
  textAlign: 'center'
});

export const evolutionTHeadCell = style({
  padding: vars.spacing.sm,
  borderBottom: `1px solid ${vars.colors.border}`,
  selectors: {
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${vars.colors.border}`
    }
  }
});

export const evolutionTbody = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
});

export const evolutionCard = style({
  display: 'block',
  width: '100%',
  height: '100%',
  borderRadius: vars.spacing.sm,
  padding: '5%',
  transition: `box-shadow 0.3s ease-out`,
  selectors: {
    '&:hover': {
      boxShadow: `0 4px 12px ${vars.alpha.shadow}`
    },
    '&.current': {
      background: vars.alpha.secondary
    }
  },
  '@media': {
    'screen and (max-width: 480px)': {
      padding: vars.spacing.xs
    }
  }
});

export const evolutionImage = style({
  width: '100%',
  height: 'auto',
  aspectRatio: '1 / 1',
  background: vars.colors.background,
  borderRadius: vars.spacing.sm,
  marginBottom: vars.spacing.xxs,
  selectors: {
    '&.current': {
      background: vars.alpha.secondary
    }
  }
});

export const evolutionPokemon = style({
  display: 'block',
  color: vars.colors.text,
  fontSize: vars.fonts.size.md,
  fontWeight: vars.fonts.weight.medium,
  marginTop: vars.spacing.xxs,
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: vars.fonts.size.xs
    }
  }
});

export const evolutionText = style({
  display: 'inline-block',
  color: vars.colors.caption,
  fontSize: vars.fonts.size.sm,
  fontWeight: vars.fonts.weight.normal,
  '@media': {
    'screen and (max-width: 1024px)': {
      selectors: {
        [`${evolutionPokemon} &`]: {
          display: 'none'
        }
      }
    },
    'screen and (max-width: 480px)': {
      fontSize: vars.fonts.size.xxs
    }
  }
});
