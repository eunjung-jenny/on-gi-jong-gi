import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const handleBackgroundColor = (type) => {
  switch (type) {
    case "특수교육기관":
      return "#e6fcf5";
    case "노인복지시설":
      return "#c3fae8";
    case "아동복지시설":
      return "#38d9a9";
    case "장애인복지시설":
      return "#0ca678";
    case "요양원":
      return "#099268";
    default:
      return "#087f5b";
  }
};

const Container = styled.article`
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: ${({ type }) => handleBackgroundColor(type)};
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Row = styled.div`
  display: felx;
  justify-content: space-between;
`;

const Col = styled.div`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Name = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Detail = styled.div`
  display: felx;
  justify-content: space-between;
  font-size: 12px;
`;

const Like = styled.div`
  display: felx;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
`;

// TODO: 홈페이지로 연결
const Homepage = styled.span`
  text-decoration: none;
  color: inherit;
`;

const ItemRequestor = ({ organization }) => (
  <SLink to={`/organizations/${organization.id}`}>
    <Container type={organization.type}>
      <Row>
        <Name>{organization.name}</Name>
        <Like>{organization.liked} ❤️</Like>
      </Row>
      <Detail>
        <Col>
          {organization.address1}에 위치한 {organization.type}입니다.
        </Col>
        <Col>
          <Homepage href={organization.homepage} target="_blank">
            <i className="fas fa-home"></i>
          </Homepage>
        </Col>
      </Detail>
    </Container>
  </SLink>
);

ItemRequestor.propTypes = {
  organization: PropTypes.object.isRequired,
};

export default ItemRequestor;

// imgurl
