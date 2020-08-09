import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Name = styled.div``;

const Section = styled.section`
  display: flex;
  margin-bottom: 10px;
`;

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  background-color: #c3fae8;
  padding: 4px 2px;
  border-radius: 10px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const Span = styled.div`
  &:not(:last-cild) {
    margin-bottom: 10px;
  }
`;

const Badge = styled.div`
  width: 10vw;
  height: 10vw;
  border: 1px solid #0ca678;
  color: #0ca678;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 20px;
`;

const AccountDetail = ({
  name,
  totalSupportNum,
  totalAmount,
  totalSupportOrganizations,
  badges,
}) => (
  <Container>
    <Section>
      <Name>{name} 님</Name>
    </Section>
    <Section>
      <Statistic>
        <Span>총 후원 횟수</Span>
        <Span>{totalSupportNum}</Span>
      </Statistic>
      <Statistic>
        <Span>총 후원 금액</Span>
        <Span>{totalAmount}</Span>
      </Statistic>
      <Statistic>
        <Span>총 후원 기관</Span>
        <Span>{totalSupportOrganizations}</Span>
      </Statistic>
    </Section>
    <Span>보유한 배지</Span>
    <Section>
      <Badge>
        <i className="far fa-smile-wink"></i>
      </Badge>
      <Badge>
        <i className="fas fa-hand-holding-heart"></i>
      </Badge>
      <Badge>
        <i className="far fa-heart"></i>
      </Badge>
      {/* {badges.map((badge, idx) => (
        <Badge key={idx}>{badge}</Badge>
      ))} */}
    </Section>
  </Container>
);

AccountDetail.propTypes = {
  name: PropTypes.string.isRequired,
  totalSupportNum: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
  totalSupportOrganizations: PropTypes.number.isRequired,
  badges: PropTypes.array,
};

export default AccountDetail;
