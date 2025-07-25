import { style, styleVariants } from '@vanilla-extract/css';

const searchFormBase = style({
  transition: 'width 0.3s ease-out',
  willChange: 'width, position',
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
      width: 143
    }
  ]
});
