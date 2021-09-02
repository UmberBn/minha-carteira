import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route exact path="/list/:type" component={ List }/>
      <Route exact path="/dashboard" component={ Dashboard }/>
      <Route path="/" component={ Dashboard }/>
    </Switch>
  </Layout>
);

export default AppRoutes;