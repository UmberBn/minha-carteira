import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import List from './pages/List';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ dark }>
      <GlobalStyles />
      <Layout>
        <List/>
      </Layout>
    </ ThemeProvider>
  );
}

export default App;