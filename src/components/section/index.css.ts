import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const sectionTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  paddingTop: vars.spacing.xxl,
  paddingBottom: vars.spacing.md,
  gap: vars.spacing.sm
});

export const titleText = style({
  fontSize: vars.fonts.size.xl,
  fontWeight: vars.fonts.weight.bold
});

export const sectionContent = style({
  selectors: {
    'section:last-of-type &': {
      paddingBottom: vars.spacing.xxl
    }
  }
});
