import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../../Component/Card";
import Footer from "../../Component/Footer";

const Container = styled.main`
  margin: 10px 20px;
  color: white;
  margin-bottom: 5vh;
`;

const Section = styled.section`
  margin-bottom: 10px;
`;

const Title = styled.div`
  padding-left: 4px;
  margin-bottom: 2px;
  font-size: 10px;
  color: gray;
`;

const Campaign = styled.article`
  background: rgb(255, 49, 0);
  background: radial-gradient(
    circle,
    rgba(255, 49, 0, 1) 50%,
    rgba(255, 49, 0, 0.79580078125) 100%
  );
  border-radius: 10px;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const MyOrgs = styled.div`
  display: flex;
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div``;

const Button = styled.div`
  display: inline-block;
  font-size: 12px;
  background-color: rgb(64, 64, 64);
  padding: 4px 8px;
  border-radius: 6px;
  &:not(:last-child) {
    margin-right: 2px;
  }
  &:last-child {
    margin-left: auto;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HomePresenter = ({
  campaign,
  myOrganizations,
  cards,
  loading,
  error,
}) => (
  <Container>
    {loading ? (
      "로딩중"
    ) : error ? (
      "에러발생"
    ) : (
      <>
        <Section>
          <Campaign>{campaign}</Campaign>
        </Section>
        <Section>
          <Title>내 기관</Title>
          <MyOrgs>
            {myOrganizations.map((myOrg, idx) => (
              <MyOrg key={idx}>{myOrg.name}</MyOrg>
            ))}
          </MyOrgs>
        </Section>
        <Section>
          <Row>
            <Col>
              <Button>가격순</Button>
              <Button>마감순</Button>
              <Button>거리순</Button>
            </Col>
            <Col>
              <Button>
                <i className="fas fa-filter"></i>
              </Button>
            </Col>
          </Row>
        </Section>
        <Section>
          <Cards>
            {cards.map((card, idx) => (
              <Card key={idx} card={card} />
            ))}
          </Cards>
        </Section>
        <Footer />
      </>
    )}
  </Container>
);

HomePresenter.propTypes = {
  campaign: PropTypes.string,
  myOrganizations: PropTypes.array,
  cards: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default HomePresenter;
