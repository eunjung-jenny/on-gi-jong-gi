import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.article`
  box-sizing: border-box;
  width: 44vw;
  padding: 15px 10px;
  background-color: grey;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ({ card }) {
  return (
    <Link to="/item/1">
      <Card>{card}</Card>
    </Link>
  );
}
