import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { ThemeProvider, AuthProvider, SideBarProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
     <SideBarProvider>
      <ThemeProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
      </ThemeProvider>
      </SideBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
