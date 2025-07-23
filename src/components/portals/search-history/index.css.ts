import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const searchHistory = style({
  position: 'fixed',
  top: vars.layout.header.height,
  left: 0,
  width: '100%',
  height: `calc(100dvh - ${vars.layout.header.height})`,
  background: vars.colors.white,
  overflow: 'auto',
  zIndex: 300
});

export const noSearchHistory = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  paddingBlock: vars.spacing.lg,
  borderBlock: `1px solid ${vars.colors.border}`
});
