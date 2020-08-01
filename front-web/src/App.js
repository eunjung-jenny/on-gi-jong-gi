import React from 'react';
import { Route } from 'react-router-dom';

import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Route component={SignupPage} path={'/signup'} />
    </>
  );
}

export default App;
