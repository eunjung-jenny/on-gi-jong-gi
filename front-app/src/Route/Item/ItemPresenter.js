import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ItemInfo from "../../Component/ItemInfo";
import ItemRequestor from "../../Component/ItemRequestor";
import ItemMessage from "../../Component/ItemMessage";

const Container = styled.main`
  margin: 10px 20px;
  border: 1px solid black;
  color: black;
`;

const Section = styled.section`
  margin-bottom: 10px;
`;

const Notice = styled.span`
  font-size: 12px;
`;

const ItemPresenter = ({ item, loading, error }) => (
  <Container>
    {loading ? (
      "로딩중"
    ) : error ? (
      "에러발생"
    ) : (
      <>
        <Section>
          <ItemInfo
            category={item.category}
            title={item.title}
            url={item.url}
            price={item.price}
            unit={item.unit}
            collected={item.collected}
            target={item.target}
          />
        </Section>
        <Section>
          <ItemRequestor organization={item.organization} />
        </Section>
        <Section>
          <ItemMessage message={item.message} />
        </Section>
        <Notice>
          물품은 목표 수량을 만족시켰을 때, 판매 기업의 후원 수량을 더하여 대상
          기관으로 배송됩니다.
        </Notice>
      </>
    )}
  </Container>
);

ItemPresenter.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

export default ItemPresenter;
