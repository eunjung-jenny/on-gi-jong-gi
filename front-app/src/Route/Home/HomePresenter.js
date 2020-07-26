import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.main`
  margin: 10px 20px;
  border: 1px solid black;
  color: white;
`;

const Section = styled.section`
  margin-bottom: 10px;
`;

const Campaign = styled.article`
  background-color: grey;
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

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
          <MyOrgs>
            {myOrganizations.map((myOrg, idx) => (
              <MyOrg key={idx}>{myOrg}</MyOrg>
            ))}
          </MyOrgs>
        </Section>
        <Section>
          <Cards>
            {cards.map((card, idx) => (
              <Card key={idx}>{card}</Card>
            ))}
          </Cards>
        </Section>
      </>
    )}
  </Container>
);

// `${campaign} / ${myOrganizations.map(
//   (org) => `${org} /`
// )} ${cards.map((card) => `${card} /`)}`

HomePresenter.propTypes = {
  campaign: PropTypes.string,
  myOrganizations: PropTypes.array,
  cards: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default HomePresenter;
