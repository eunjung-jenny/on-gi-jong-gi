import React from 'react';
import Sidebar from '../components/common/Sidebar';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const DashboardPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
    </>
  );
};

export default DashboardPage;
