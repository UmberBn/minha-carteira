import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import { useTheme } from './context/ThemeContext'

const App: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <ThemeProvider theme={ currentTheme }>
      <GlobalStyles />
      <Routes />
    </ ThemeProvider>
  );
}

export default App;