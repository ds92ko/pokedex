import { style, styleVariants } from '@vanilla-extract/css';

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
