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
  padding: 5px 10px;
  background-color: black;
  color: white;
`;

export default function () {
  return (
    <Footer>
      <Link to="/">
        <span>홈</span>
      </Link>
      <Link to="/organizations">
        <span>시설보기</span>
      </Link>
      <Link to="/profile">
        <span>프로필</span>
      </Link>
    </Footer>
  );
}
