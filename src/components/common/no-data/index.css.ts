import { style } from '@vanilla-extract/css';

import { datalist } from '@/components/common/datalist/index.css';
import { vars } from '@/styles/vars.css';

export const noData = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  paddingBlock: vars.spacing.lg,
  borderBlock: `1px solid ${vars.colors.border}`,
  selectors: {
    [`${datalist} &`]: {
      borderColor: 'transparent'
    }
  }
});
