import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import ItemListContainer from '../containers/items/ItemListContainer';
import MobileHeaderContainer from '../containers/common/MobileHeaderContainer';

const ItemListPage = () => {
  return (
    <>
      <HeaderContainer />
      <MobileHeaderContainer />
      <Sidebar />
      <ItemListContainer />
    </>
  );
};

export default ItemListPage;
