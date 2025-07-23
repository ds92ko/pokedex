import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const main = style({
  position: 'relative',
  minHeight: '100dvh',
  paddingTop: vars.layout.header.height,
  zIndex: 100
});
