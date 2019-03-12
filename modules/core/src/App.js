// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Router from './config/router';

// styles
import theme from './styles/mainTheme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;
