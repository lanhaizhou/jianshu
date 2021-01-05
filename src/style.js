
import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1608882427069'); /* IE9 */
  src: url('./iconfont.eot?t=1608882427069#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1608882427069') format('woff'),
  url('./iconfont.ttf?t=1608882427069') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1608882427069#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 `




