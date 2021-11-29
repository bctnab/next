/**
 * This context holds user configuration stuff, like:
 * - Dark or light mode
 */
import React from 'react';

import {
  LIGHT_COLORS,
  PREFERS_DARK_KEY,
  PREFERS_DARK_CSS_PROP,
} from '../../colors';
import usePersistedState from '../../hooks/use-persisted-state';

export const ConfigContext = React.createContext<any>({});

export const ConfigProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState<string>('light');
  const [
    allowColorTransitions,
    setAllowColorTransitions,
  ] = React.useState<boolean>(false);
  const [
    disableTabInCodeSnippets,
    setDisableTabInCodeSnippets,
  ] = usePersistedState('tab-in-code-snippets', true);

  const setColorVariable = function (value: string) {
    let root = window.document.documentElement;

    const prefersDark = (value === 'dark');
    const newColors = LIGHT_COLORS;

    root.style.setProperty(PREFERS_DARK_CSS_PROP, prefersDark.toString());
    root.style.setProperty('--color-text', newColors.text);
    root.style.setProperty(
      '--color-background',
      newColors.background
    );
    root.style.setProperty(
      '--color-fill-background',
      newColors.fillBackground
    );
    root.style.setProperty('--color-primary', newColors.primary);
    root.style.setProperty(
      '--color-secondary',
      newColors.secondary
    );
    root.style.setProperty('--color-error', newColors.error);
    root.style.setProperty('--base-box-radius', newColors.boxRadius);
    root.style.setProperty('--color-box-shadow', newColors.boxShadow);
    root.style.setProperty('--color-decorative', newColors.decorative);
    root.style.setProperty('--color-muted', newColors.muted);
    root.style.setProperty(
      '--color-muted-background',
      newColors.mutedBackground
    );
    root.style.setProperty('--color-info', newColors.info);
    root.style.setProperty('--color-success', newColors.success);
    root.style.setProperty(
      '--color-success-background',
      newColors.successBackground
    );
    root.style.setProperty('--color-error', newColors.error);
    root.style.setProperty(
      '--color-error-background',
      newColors.errorBackground
    );
    root.style.setProperty('--color-alert', newColors.alert);
    root.style.setProperty(
      '--color-alert-background',
      newColors.alertBackground
    );
    root.style.setProperty('--color-gray-100', newColors.gray[100]);
    root.style.setProperty('--color-gray-200', newColors.gray[200]);
    root.style.setProperty('--color-gray-300', newColors.gray[300]);
    root.style.setProperty('--color-gray-400', newColors.gray[400]);
    root.style.setProperty('--color-gray-500', newColors.gray[500]);
    root.style.setProperty('--color-gray-600', newColors.gray[600]);
    root.style.setProperty('--color-gray-700', newColors.gray[700]);
    root.style.setProperty('--color-gray-900', newColors.gray[900]);
    root.style.setProperty(
      '--color-gray-1000',
      newColors.gray[1000]
    );
    root.style.setProperty(
      '--color-subtle-background',
      newColors.subtleBackground
    );
    root.style.setProperty(
      '--color-subtle-floating',
      newColors.subtleFloating
    );

    localStorage.setItem(PREFERS_DARK_KEY, prefersDark.toString());
  }

  React.useEffect(function(){
    setColorVariable(colorMode);
  }, []);

  const value = React.useMemo(() => {
    const setColorMode = (value) => {
      if (!allowColorTransitions) {
        setAllowColorTransitions(true);
      }
      setColorVariable(value);
      rawSetColorMode(value);
    };

    return {
      colorMode,
      setColorMode,
      allowColorTransitions,
      disableTabInCodeSnippets,
      setDisableTabInCodeSnippets,
    };
  }, [
    colorMode,
    rawSetColorMode,
    allowColorTransitions,
    disableTabInCodeSnippets,
    setDisableTabInCodeSnippets,
  ]);

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
};
