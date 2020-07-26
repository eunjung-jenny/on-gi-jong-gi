import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.article``;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 18px;
`;

const ItemMessage = ({ message }) => (
  <Container>
    <Title>드리는 말씀</Title>
    <Content>{message}</Content>
  </Container>
);

ItemMessage.propTypes = {
  message: PropTypes.string,
};

export default ItemMessage;
