import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ItemRequestor from "../../Component/ItemRequestor";
import Footer from "../../Component/Footer";

const Container = styled.main`
  margin: 10px 20px;
  padding-bottom: 5vh;
  color: black;
`;

const Section = styled.section`
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  display: inline-block;
  font-size: 12px;
  background-color: rgb(64, 64, 64);
  padding: 4px 8px;
  border-radius: 6px;
  color: white;
  &:not(:last-child) {
    margin-right: 2px;
  }
  &:last-child {
    margin-left: auto;
    background-color: transparent;
    color: rgb(64, 64, 64);
    font-size: 18px;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  width: 100%;
  &:focus {
    outline: none;
  }
  color: rgba(0, 0, 0, 0.6);
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
            <Button>
              <i className="far fa-map"></i>
            </Button>
          </Buttons>
        </Section>
        <Section>
          <Input placeholder="검색어를 입력하세요" />
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
