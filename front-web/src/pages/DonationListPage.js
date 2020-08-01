import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import DonationListContainer from '../containers/donations/DonationListContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const DonationListPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <DonationListContainer />
    </>
  );
};

export default DonationListPage;
