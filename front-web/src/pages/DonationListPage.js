import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import DonationListContainer from '../containers/donations/DonationListContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import SidebarContainer from '../containers/common/SidebarContainer';

const DonationListPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <SidebarContainer />
      <DonationListContainer />
    </>
  );
};

export default DonationListPage;
