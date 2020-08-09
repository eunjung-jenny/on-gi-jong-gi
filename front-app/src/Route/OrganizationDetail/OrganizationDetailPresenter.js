import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "../../Component/Footer";

const Container = styled.main`
  margin: 10px 20px;
  color: black;
`;

const Type = styled.div`
  font-size: 14px;
  color: gray;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 24px;
  margin-right: 5px;
`;

const Description = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #38d9a9;
  border-radius: 10px;
  color: white;
`;

const Address = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: gray;
`;

const Liked = styled.div``;

const Homepage = styled.div``;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 85vw;
  height: 40vh;
`;

const OrganizationDetailPresenter = ({ organization, loading, error }) => (
  <Container>
    {loading ? (
      "로딩중"
    ) : error ? (
      "에러발생"
    ) : (
      <>
        <Type>{organization.type}</Type>
        <Row>
          <Col>
            <Name>{organization.name}</Name>
            <Homepage href={organization.homepage}>
              <i className="fas fa-home"></i>
            </Homepage>
          </Col>
          <Liked>{organization.liked} ❤️</Liked>
        </Row>
        <Address>
          {`${organization.address1} ${organization.address2} ${organization.address3}`}
        </Address>
        <Description>{organization.description[0]}</Description>
        <Image src={organization.imgurl}></Image>
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
