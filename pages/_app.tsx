import React from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import { THEME } from '../colors';
import { trackPageview } from '../lib/analytics.helpers';

import { ConfigProvider } from '../components/ConfigContext/ConfigContext';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

import 'focus-visible';
import '../styles/markdown.css';
import 'tippy.js/dist/tippy.css';
import '../styles/font-styles.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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