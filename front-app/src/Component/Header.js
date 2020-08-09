import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #0ca678;
  color: white;
`;

export default function () {
  return (
    <Header>
      <span>
        <i className="fas fa-bars"></i>
      </span>
      <span>푸므로</span>
      <span>
        <i className="fas fa-bell"></i>
      </span>
    </Header>
  );
}
