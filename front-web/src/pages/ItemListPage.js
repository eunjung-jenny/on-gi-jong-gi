import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import ItemListContainer from '../containers/items/ItemListContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';
import SidebarContainer from '../containers/common/SidebarContainer';

const ItemListPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <SidebarContainer />
      <ItemListContainer />
    </>
  );
};

export default ItemListPage;
