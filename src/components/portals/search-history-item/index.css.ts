import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const searchHistoryButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.spacing.sm,
  flexWrap: 'wrap',
  width: '100%',
  paddingBlock: vars.spacing.sm,
  borderTop: `1px solid ${vars.colors.border}`,
  transition: 'background 0.3s ease-out',
  selectors: {
    '.searchHistoryItem:not(.error) &:hover': {
      background: vars.colors.background
    },
    '.searchHistoryItem:last-of-type &': {
      borderBottom: `1px solid ${vars.colors.border}`
    }
  }
});

export const searchHistoryContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  textAlign: 'left',
  selectors: {
    '.searchHistoryItem.error &': {
      opacity: 0.7
    }
  }
});

export const searchHistoryText = style({
  fontSize: vars.fonts.size.lg,
  fontWeight: vars.fonts.weight.medium,
  color: vars.colors.accent
});
