import { style, styleVariants } from '@vanilla-extract/css';

import { fade } from '@/styles/animations.css';
import { vars } from '@/styles/vars.css';

export const DialogBackdropBase = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.alpha.shadow,
  backdropFilter: 'blur(3px)',
  overflow: 'hidden',
  opacity: 0,
  willChange: 'opacity',
  zIndex: 600
});

export const DialogBackdrop = styleVariants({
  open: [
    DialogBackdropBase,
    {
      animation: `${fade.in} 0.3s ease-in-out forwards`
    }
  ],
  close: [
    DialogBackdropBase,
    {
      animation: `${fade.out} 0.3s ease-in-out forwards`
    }
  ]
});

export const dialog = style({
  width: 'max-content',
  maxWidth: '80%',
  padding: vars.spacing.lg,
  background: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md,
  boxShadow: `0 4px 12px ${vars.alpha.shadow}`
});

export const dialogTitle = style({
  color: vars.colors.text,
  fontSize: vars.fonts.size.lg,
  fontWeight: vars.fonts.weight.bold,
  marginBottom: vars.spacing.sm
});

export const dialogContent = style({
  marginBottom: vars.spacing.md
});

export const dialogButtonGroup = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.spacing.sm
});
