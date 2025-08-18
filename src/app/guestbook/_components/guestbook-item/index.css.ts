import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const guestbookCard = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: vars.spacing.md,
  padding: vars.spacing.lg,
  background: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md
});

export const guestbookCardTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: vars.fonts.size.lg,
  fontWeight: vars.fonts.weight.bold
});

export const guestbookCardContent = style({
  whiteSpace: 'pre-line'
});

export const guestbookCardControl = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: vars.colors.caption,
  fontSize: vars.fonts.size.sm
});

export const guestbookCardButtonGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs
});
