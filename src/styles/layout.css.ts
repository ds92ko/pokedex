import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const main = style({
  position: 'relative',
  paddingTop: vars.layout.header.height,
  zIndex: 100
});
