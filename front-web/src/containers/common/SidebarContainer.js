import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/common/Sidebar';

const SidebarContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <Sidebar user={user} />;
};

export default SidebarContainer;
