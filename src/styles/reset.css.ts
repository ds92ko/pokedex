import { globalStyle } from '@vanilla-extract/css';

import { fontFamily, vars } from '@/styles/vars.css';

globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline'
  }
);

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  {
    display: 'block'
  }
);

globalStyle('body', {
  fontFamily: `${fontFamily.text}, sans-serif`,
  fontWeight: vars.fonts.weight.normal,
  fontSize: vars.fonts.size.md,
  color: vars.colors.text,
  lineHeight: 1
});

globalStyle('ol, ul', {
  listStyle: 'none'
});

globalStyle('blockquote, q', {
  quotes: 'none'
});

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: ''
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit'
});

globalStyle('button', {
  font: 'inherit',
  padding: 0,
  border: 0,
  outline: 0,
  background: 'transparent',
  color: 'inherit',
  cursor: 'pointer'
});

globalStyle('input', {
  font: 'inherit',
  padding: 0,
  border: 0,
  borderRadius: 0,
  outline: 'none',
  color: 'inherit',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  height: vars.fonts.size.md
});

globalStyle('[class*="skeleton"], [class*="skeleton"] *', {
  color: 'transparent !important'
});
