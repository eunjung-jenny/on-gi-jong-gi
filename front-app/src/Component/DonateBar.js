import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DonateBar = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5vh;
  padding: 10px 10px;
  background-color: black;
  color: white;
`;

const DonateButton = styled.button`
  width: 100%;
  height: 100%;
  appearance: none;
  border: none;
  border-radius: 10px;
  font-size: 24px;
`;

export default function () {
  return (
    <DonateBar>
      <DonateButton>후원하기 ►</DonateButton>
    </DonateBar>
  );
}
