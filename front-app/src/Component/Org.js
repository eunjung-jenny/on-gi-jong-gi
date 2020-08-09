import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MyOrg = styled.article`
  width: auto;
  padding: 4px 4px;
  border: 1px solid #0ca678;
  color: #0ca678;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 5px;
  font-size: 12px;
`;

export default function ({ org }) {
  return (
    <SLink to={`/organizations/${org.id}`}>
      <MyOrg>{org.name}</MyOrg>
    </SLink>
  );
}
