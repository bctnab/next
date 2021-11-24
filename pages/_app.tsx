import React from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../colors';

import { ConfigProvider } from '../components/ConfigContext/ConfigContext';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

import 'focus-visible';
import '../styles/markdown.css';
import 'tippy.js/dist/tippy.css';
import '../styles/font-styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ THEME }>
      <ConfigProvider>
        <Component {...pageProps} />
        
        {/* TODO: real prop value */}
        <GlobalStyles allowColorTransitions={true} />
      </ConfigProvider>
    </ThemeProvider>
  )
}