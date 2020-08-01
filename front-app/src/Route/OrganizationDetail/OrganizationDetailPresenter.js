import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "../../Component/Footer";

const Container = styled.main`
  margin: 10px 20px;
  border: 1px solid black;
  color: black;
`;

const OrganizationDetailPresenter = ({ organization, loading, error }) => (
  <Container>
    {loading ? (
      "로딩중"
    ) : error ? (
      "에러발생"
    ) : (
      <>
        {organization.name} {organization.address} {organization.type}
        {organization.liked}
        {organization.message}
      </>
    )}
    <Footer />
  </Container>
);

OrganizationDetailPresenter.propTypes = {
  organization: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default OrganizationDetailPresenter;
