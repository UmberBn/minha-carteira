import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
  ThemeProvider,
  AuthProvider,
  SideBarProvider,
  SelectdDateProvider
} from './context'

ReactDOM.render(
  <React.StrictMode>
     <SideBarProvider>
      <ThemeProvider>
        <SelectdDateProvider>
          <AuthProvider>
              <App />
          </AuthProvider>
        </SelectdDateProvider>
      </ThemeProvider>
      </SideBarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
