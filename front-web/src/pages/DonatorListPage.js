import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import DonatorListContainer from '../containers/donators/DonatorListContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import SidebarContainer from '../containers/common/SidebarContainer';

const DonatorListPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <SidebarContainer />
      <DonatorListContainer />
    </>
  );
};

export default DonatorListPage;
