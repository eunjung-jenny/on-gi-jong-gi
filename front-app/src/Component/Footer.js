import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  background-color: #0ca678;
  color: white;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function () {
  return (
    <Footer>
      <SLink to="/">
        <span>
          <i className="fas fa-home"></i>
        </span>
      </SLink>
      <SLink to="/organizations">
        <span>
          <i className="fas fa-building"></i>
        </span>
      </SLink>
      <SLink to="/profile">
        <span>
          <i className="fas fa-user"></i>
        </span>
      </SLink>
    </Footer>
  );
}
