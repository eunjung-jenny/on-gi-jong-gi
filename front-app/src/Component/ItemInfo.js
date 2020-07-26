import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.article`
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px 10px;
  background-color: grey;
  border-radius: 15px;
`;

const ItemDetail = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Category = styled.span`
  font-size: 28px;
  margin-right: 10px;
`;

const ItemSummary = styled.div`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 22px;
  margin-bottom: 10px;
`;

const PriceUnit = styled.span`
  font-size: 18px;
`;

const Coupang = styled.span`
  font-size: 14px;
  margin-left: auto;
`;

const Status = styled.div``;

const ItemInfo = ({ category, title, url, price, unit, collected, target }) => (
  <Container>
    <ItemDetail>
      <Category>{category}</Category>
      <ItemSummary>
        <Title>{title}</Title>
        <PriceUnit>
          {price}원/{unit}
        </PriceUnit>
      </ItemSummary>
      <Coupang>url: {url}</Coupang>
    </ItemDetail>
    <Status>
      {collected}/{target}
    </Status>
  </Container>
);

ItemInfo.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  collected: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
};

export default ItemInfo;
