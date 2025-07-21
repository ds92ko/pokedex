import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const infoContent = style({
  display: 'flex'
});

export const pokemonName = style({
  fontSize: vars.fonts.size.xxl
});

export const evolutionList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
});
