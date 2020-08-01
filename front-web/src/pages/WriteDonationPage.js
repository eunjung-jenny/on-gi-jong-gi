import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import SidebarContainer from '../containers/common/SidebarContainer';
import WriteDonationContainer from '../containers/create/WriteDonationContainer';

const WriteDonationPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <SidebarContainer />
      <WriteDonationContainer />
    </>
  );
};

export default WriteDonationPage;
