import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VerticalResponsive from './VerticalResponsive';
import palette from '../../lib/styles/palette';

const SidebarBlock = styled.div`
  position: fixed;
  left: 0%;
  top: 4rem;
  width: 12rem;
  height: calc(100% - 4rem);
  background: ${palette.teal[5]};
  box-shadow: 2px 4px 2px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled(VerticalResponsive)`
  margin-left: 2rem;
  color: ${palette.teal[0]};
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.125rem;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  div {
    transition: color 0.3s linear;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
  div + div {
    margin-top: 0.75rem;
  }
`;

const Sidebar = ({ user }) => {
  return (
    <>
      <SidebarBlock>
        <Wrapper>
          <div>
            <Link to="/">대시보드</Link>
          </div>
          <div>
            <Link to="/item">물품 목록</Link>
          </div>
          {user.userType === 'company' && (
            <div>
              <Link to="/create">물품 추가</Link>
            </div>
          )}
          <div>
            <Link to="/donation">기부 목록</Link>
          </div>
          {user.userType === 'institution' && (
            <div>
              <Link to="/donator">기부자 목록</Link>
            </div>
          )}
        </Wrapper>
      </SidebarBlock>
    </>
  );
};

export default Sidebar;
