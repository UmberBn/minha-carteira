import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ dark }>
      <GlobalStyles />
      <Routes />
    </ ThemeProvider>
  );
}

export default App;