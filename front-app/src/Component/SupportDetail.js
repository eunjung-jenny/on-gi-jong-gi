import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.article`
  box-sizing: border-box;
  background-color: #20c997;
  color: white;
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
  color: black;
`;

const Button = styled.div`
  flex: 1;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  background-color: white;
  padding: 4px 8px;
  border-radius: 6px;
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

const SupportDetail = ({ supportDetail }) => (
  <SLink>
    <Card>
      <Title>{supportDetail.reward.title}</Title>
      <Details>
        <Span>
          {supportDetail.volume}개{" "}
          {supportDetail.volume * supportDetail.reward.net_price}원
        </Span>
        <Span>{`${new Date(supportDetail.created_at).getFullYear()}.${
          new Date(supportDetail.created_at).getMonth() + 1
        }.${new Date(supportDetail.created_at).getDate()}`}</Span>
      </Details>
      <Buttons>
        <Button>피드백보기</Button>
        <Button>기관정보</Button>
        <Button>후원증서</Button>
      </Buttons>
    </Card>
  </SLink>
);

SupportDetail.propTypes = {
  supportDetail: PropTypes.string.isRequired,
};

export default SupportDetail;
