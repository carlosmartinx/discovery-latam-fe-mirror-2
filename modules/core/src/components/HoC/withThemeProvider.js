import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/mainTheme';

const withThemeProvider = Component => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);

export default withThemeProvider;
