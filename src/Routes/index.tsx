import React from 'react';
import App from './app.routes';
import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from './Auth.Routes';

const Routes: React.FC = () => (
  <BrowserRouter>
    <AuthRoutes />
  </BrowserRouter>
)

export default Routes;