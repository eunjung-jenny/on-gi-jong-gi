import React from 'react';
import { Route } from 'react-router-dom';

import DashboardPage from './pages/Dashboard';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ItemListPage from './pages/ItemListPage';

function App() {
  return (
    <>
      <Route component={DashboardPage} path={'/'} exact />
      <Route component={SignupPage} path={'/signup'} />
      <Route component={LoginPage} path={'/login'} />
      <Route component={ItemListPage} path={'/item'} exact />
    </>
  );
}

export default App;
