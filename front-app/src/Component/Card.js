import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const handleBackgroundColor = (item) => {
  switch (item) {
    case "라면":
      return "#087f5b";
    case "도서":
      return "#195f4d";
    case "문구":
      return "#12b886";
    case "장난감":
      return "#0ca678";
    case "생수":
      return "#38d9a9";
    default:
      return "#20c997";
  }
};

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.article`
  box-sizing: border-box;
  width: 44vw;
  height: 12vh;
  padding: 5px 10px;
  background-color: ${({ item }) => handleBackgroundColor(item)};
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
`;

const RowRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3px;
`;

const Item = styled.span`
  font-size: 16px;
  margin-right: 5px;
`;

const Price = styled.span`
  font-size: 12px;
`;

const Type = styled.span`
  font-size: 10px;
  text-align: right;
`;

const Name = styled.span`
  font-size: 12px;
  text-align: right;
`;

const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export default function ({ card }) {
  return (
    <SLink to="/item/1">
      <Card item={card.title}>
        <Row>
          <Item>{card.title}</Item>
          <Price>{card.net_price}원</Price>
        </Row>
        <RowRight>
          <Col>
            <Type>{card.facility.type}</Type>
            <Name>{card.facility.name}</Name>
          </Col>
          <Image src={card.facility.imgurl}></Image>
        </RowRight>
      </Card>
    </SLink>
  );
}

// title
// facility.name
// facility.type
// max_vol
// net_price
