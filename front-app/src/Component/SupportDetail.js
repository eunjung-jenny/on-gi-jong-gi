import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.article`
  box-sizing: border-box;
  background-color: grey;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Span = styled.div``;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button``;

const SupportDetail = ({ supportDetail }) => (
  <Card>
    <Title>{supportDetail}</Title>
    <Details>
      <Span>1개 2500원</Span>
      <Span>7월 11일</Span>
    </Details>
    <Buttons>
      <Button>피드백보기</Button>
      <Button>기관정보</Button>
      <Button>후원증서</Button>
    </Buttons>
  </Card>
);

SupportDetail.propTypes = {
  supportDetail: PropTypes.string.isRequired,
};

export default SupportDetail;
