import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

const searchFormBase = style({
  transition: 'width 0.3s ease-out',
  zIndex: 200
});

export const searchForm = styleVariants({
  open: [
    searchFormBase,
    {
      position: 'absolute',
      width: '100%'
    }
  ],
  close: [
    searchFormBase,
    {
      position: 'relative',
      width: 135
    }
  ]
});

export const searchBar = style({
  width: '100%'
});

export const searchHistory = style({
  position: 'fixed',
  top: vars.layout.header.height,
  left: 0,
  width: '100%',
  height: `calc(100vh - ${vars.layout.header.height})`,
  background: vars.colors.white,
  overflow: 'auto',
  zIndex: 300
});

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

export const noResult = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  paddingBlock: vars.spacing.lg,
  borderBlock: `1px solid ${vars.colors.border}`
});
