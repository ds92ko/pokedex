import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const sectionTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginTop: vars.spacing.xxl,
  gap: vars.spacing.sm
});

export const titleText = style({
  fontSize: vars.fonts.size.xl,
  fontWeight: vars.fonts.weight.bold
});

export const sectionContent = style({
  marginBlock: vars.spacing.xxl,
  selectors: {
    [`${sectionTitle} + &`]: {
      marginTop: vars.spacing.lg
    }
  }
});
