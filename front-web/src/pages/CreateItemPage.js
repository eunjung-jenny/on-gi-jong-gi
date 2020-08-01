import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import SidebarContainer from '../containers/common/SidebarContainer';
import CreateItemContainer from '../containers/create/CreateItemContainer';

const CreateItemPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <SidebarContainer />
      <CreateItemContainer />
    </>
  );
};

export default CreateItemPage;
