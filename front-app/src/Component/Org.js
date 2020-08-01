import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyOrg = styled.article`
  width: 10vw;
  height: 10vw;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 5px;
`;

export default function ({ org }) {
  return (
    <Link to="/organizations/1">
      <MyOrg>{org}</MyOrg>
    </Link>
  );
}
