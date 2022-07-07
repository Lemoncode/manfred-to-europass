import * as React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeStyles } from './themeStyles';

export const ThemeProviderComponent = (props) => {
  const { children } = props;

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={themeStyles}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};
