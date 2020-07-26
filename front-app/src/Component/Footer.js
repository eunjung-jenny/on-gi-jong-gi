import React from "react";
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
      <span>홈</span>
      <span>시설보기</span>
      <span>프로필</span>
    </Footer>
  );
}
