import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const playground = style({
  position: 'relative',
  width: '100%',
  height: `calc(100dvh - ${vars.layout.header.height} - ${vars.layout.section.spacing.hasTitle})`,
  background: `url('/images/grass.png') center / 30% repeat`,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md,
  overflow: 'hidden'
});

export const emptyPlayground = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xxs,
  height: '100%',
  fontSize: vars.fonts.size.lg,
  background: vars.alpha.white
});

export const pokemon = style({
  position: 'absolute',
  userSelect: 'none',
  pointerEvents: 'none'
});

export const pokemonName = style({
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'max-content',
  fontWeight: vars.fonts.weight.bold,
  textAlign: 'center'
});
