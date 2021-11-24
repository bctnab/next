import React from 'react';
import { createGlobalStyle } from 'styled-components';

import {
  COLOR_SWAP_TRANSITION_DURATION,
} from '../../colors';

const GlobalStyles = createGlobalStyle`
  /* CSS RESET */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  p{
    font-size: 1rem;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  #__next {
    isolation: isolate;
  }

  html{
    font-size: 15px;
    overflow-y: scroll;
    font-family: var(--font-family);
  }
  body {
    color: var(--color-text);
    background: var(--color-fill-background);
    transition: ${(p) => {
      if (!p.allowColorTransitions) {
        return null;
      }
      return `color ${COLOR_SWAP_TRANSITION_DURATION}ms, background ${COLOR_SWAP_TRANSITION_DURATION}ms`;
    }};
  }

  a:focus {
    outline: 5px auto var(--color-primary);
  }

  body, input, button, select, option {
    font-weight: var(--font-weight-light);
  }

  h1, h2, h3, h4, h5, h6{
    line-height: 1.2;
    font-weight: var(--font-weight-bold);
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  code {
    font-size: 0.95em;
  }

  /* CSS Variables */
  :root {
    --font-weight-bold: 600;
    --font-weight-medium: 500;
    --font-weight-light: 400;

    --font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Source Han Sans SC,Noto Sans CJK SC,Microsoft YaHei,WenQuanYi Micro Hei,WenQuanYi Zen Hei,Helvetica Neue,Arial,sans-serif;
    --font-family-mono: 'League Mono', 'Fira Mono', monospace;

    /* HACK:
      Reach UI tests for loaded styles, but I'm providing my own.
      This is to avoid a noisy warning in dev.
    */
   --reach-dialog: 1;
  }
`;

const GlobalStylesWrapper = (props) => {
  // TODO: Remove altogether?
  // React.useEffect(() => {
  //   document.documentElement.style.setProperty(
  //     '--scrollbar-width',
  //     window.innerWidth - document.documentElement.clientWidth + 'px'
  //   );
  // }, []);
  return <GlobalStyles {...props} />;
};

export default React.memo(GlobalStylesWrapper);
