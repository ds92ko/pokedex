import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const tooltip = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.xxs
});

export const tooltipControl = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const tooltipButton = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.accent,
  selectors: {
    '&:hover, &:focus': {
      color: vars.alpha.accent
    }
  }
});

export const tooltipPopupBase = style({
  position: 'absolute',
  width: 'max-content',
  fontSize: vars.fonts.size.xxs,
  paddingBlock: vars.spacing.xxs,
  paddingInline: vars.spacing.sm,
  borderRadius: `calc((${vars.fonts.size.xxs} + (${vars.spacing.xxs} * 2)) / 2)`,
  border: `1px solid ${vars.colors.border}`,
  background: vars.colors.background,
  boxShadow: `0 2px 4px ${vars.alpha.shadow}`,
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.3s ease-out',
  zIndex: 10,
  selectors: {
    [`${tooltipButton}:hover + &, ${tooltipButton}:focus + &`]: {
      opacity: 1,
      visibility: 'visible'
    }
  }
});

export const tooltipPopup = styleVariants({
  top: [
    tooltipPopupBase,
    {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: vars.spacing.xs
    }
  ],
  bottom: [
    tooltipPopupBase,
    {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: vars.spacing.xs
    }
  ],
  left: [
    tooltipPopupBase,
    {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: vars.spacing.xs
    }
  ],
  right: [
    tooltipPopupBase,
    {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: vars.spacing.xs
    }
  ]
});
