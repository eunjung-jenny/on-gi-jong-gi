import React from 'react';
import { Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ItemListPage from './pages/ItemListPage';
import DonationListPage from './pages/DonationListPage';
import DonatorListPage from './pages/DonatorListPage';
import CreateItemPage from './pages/CreateItemPage';
import WriteDonationPage from './pages/WriteDonationPage';

function App() {
  return (
    <>
      <Route component={DashboardPage} path={'/'} exact />
      <Route component={SignupPage} path={'/signup'} />
      <Route component={LoginPage} path={'/login'} />
      <Route component={ItemListPage} path={'/item'} exact />
      <Route component={DonationListPage} path={'/donation'} exact />
      <Route component={DonatorListPage} path={'/donator'} exact />
      <Route component={CreateItemPage} path={'/create'} exact />
      <Route component={WriteDonationPage} path={'/write'} exact />
    </>
  );
}

export default App;
