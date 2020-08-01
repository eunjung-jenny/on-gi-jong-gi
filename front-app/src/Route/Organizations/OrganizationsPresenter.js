import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ItemRequestor from "../../Component/ItemRequestor";
import Footer from "../../Component/Footer";

const Container = styled.main`
  margin: 10px 20px;
  border: 1px solid black;
  color: black;
`;

const Section = styled.section`
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-right: 10px;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 5px 5px;
  font-size: 18px;
`;

const OrganizationsPresenter = ({ organizations, loading, error }) => (
  <Container>
    {loading ? (
      "로딩중"
    ) : error ? (
      "에러발생"
    ) : (
      <>
        <Section>
          <Buttons>
            <Button>아동</Button>
            <Button>복지</Button>
            <Button>의료</Button>
          </Buttons>
        </Section>
        <Section>
          검색: <Input />
        </Section>
        <Section>
          {organizations.map((organization, idx) => (
            <ItemRequestor key={idx} organization={organization} />
          ))}
        </Section>
        <Footer />
      </>
    )}
  </Container>
);

OrganizationsPresenter.propTypes = {
  organizations: PropTypes.array,
};

export default OrganizationsPresenter;
