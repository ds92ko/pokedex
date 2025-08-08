import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const accordion = style({
  height: 'max-content',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.spacing.md,
  lineHeight: 1.2,
  overflow: 'hidden'
});

export const accordionTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: vars.spacing.md,
  fontWeight: vars.fonts.weight.medium,
  transition: 'background-color 0.3s ease-out',
  selectors: {
    '&:hover, &:focus, &.active': {
      background: vars.colors.background
    }
  }
});

export const marker = style({
  transition: 'transform 0.3s ease-out',
  selectors: {
    [`${accordion}.open &`]: {
      transform: 'rotate(180deg)'
    }
  }
});

export const article = style({
  maxHeight: 0,
  overflow: 'hidden',
  transition: 'max-height 0.5s ease-out',
  transitionDelay: '0.2s',
  selectors: {
    [`${accordion}.open &`]: {
      transitionDelay: '0s'
    }
  }
});

export const content = style({
  padding: vars.spacing.md,
  borderTop: `1px solid ${vars.colors.border}`,
  opacity: 0,
  transition: 'opacity 0.3s ease-out',
  transitionDelay: '0s',
  selectors: {
    [`${accordion}.open &`]: {
      opacity: 1,
      transitionDelay: '0.2s'
    }
  }
});
