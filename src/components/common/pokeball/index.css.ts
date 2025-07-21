import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const pokeball = style({
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(to bottom, 
    ${vars.colors.primary} 0%, 
    ${vars.colors.primary} 50%, 
    ${vars.colors.white} 50%, 
    ${vars.colors.white} 100%)`,
  border: `0 solid ${vars.colors.text}`,
  borderRadius: '50%'
});

export const pokeballLine = style({
  position: 'absolute',
  width: '100%',
  height: 0,
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  background: vars.colors.text,
  zIndex: 1
});

export const pokeballButton = style({
  position: 'absolute',
  width: '40%',
  height: '40%',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  background: `radial-gradient(circle,
    ${vars.colors.text} 0%,
    ${vars.colors.text} 40%,
    ${vars.colors.white} 40%,
    ${vars.colors.white} 100%
  );`,
  border: `0 solid ${vars.colors.text}`,
  borderRadius: '50%',
  zIndex: 2
});
