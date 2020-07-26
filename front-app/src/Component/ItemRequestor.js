import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.article`
  box-sizing: border-box;
  display: flex;
  padding: 5px 10px;
  background-color: grey;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const Col = styled.div`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Name = styled.span`
  font-size: 24px;
`;

const Detail = styled.div`
  display: felx;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Like = styled.div`
  display: felx;
  justify-content: space-between;
`;

const ItemRequestor = ({ organization }) => (
  <Container>
    <Col>
      <Name>{organization.name}</Name>
    </Col>
    <Col>
      <Detail>
        <Col>
          기관은 {organization.address}에 위치한 {organization.type}입니다.
        </Col>
        <Col>...</Col>
      </Detail>
      <Like>
        <Col>현재 {organization.liked}명이 즐겨찾기 등록했습니다.</Col>
        <Col>❤️</Col>
      </Like>
    </Col>
  </Container>
);

ItemRequestor.propTypes = {
  organization: PropTypes.object.isRequired,
};

export default ItemRequestor;
