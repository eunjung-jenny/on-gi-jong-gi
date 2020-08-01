import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import DonatorListContainer from '../containers/donators/DonatorListContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const DonatorListPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <DonatorListContainer />
    </>
  );
};

export default DonatorListPage;
