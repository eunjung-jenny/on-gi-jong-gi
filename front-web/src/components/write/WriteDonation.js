import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const WriteDonationBlock = styled.form`
  position: absolute;
  top: 8rem;
  left: 12rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 1600px;
  margin: 0 auto;
  height: calc(100% - 8rem);
  .image-label {
    border: 1px dotted ${palette.teal[4]};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      cursor: pointer;
      height: 80%;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${palette.teal[4]};
      font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      &:hover {
        color: ${palette.teal[7]};
        font-weight: bold;
      }
    }
  }

  @media (max-width: 1600px) {
    width: 1200px;
  }
  @media (max-width: 1400px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1.125rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;
const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  height: 2.125rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
const ItemItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.teal[2]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }
  a {
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;
const SubInfo = styled.div`
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const WriteDonation = ({
  item,
  onChangeField,
  onPublish,
  onCancel,
  title,
  targetQuantity,
  expiresAt,
}) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChangeTargetQuantity = (e) => {
    onChangeField({ key: 'targetQuantity', value: e.target.value });
  };
  const onChangeExpiresAt = (e) => {
    onChangeField({ key: 'expiresAt', value: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onPublish();
  };

  return (
    <WriteDonationBlock method="post" onSubmit={onSubmit}>
      <ItemItemBlock>
        <h2>{item.name}</h2>
        <SubInfo>
          <span>
            <b>{item.user.userName}</b>
          </span>
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </SubInfo>

        <img src={item.image} alt="item"></img>
        <SubInfo>
          <span>category: {item.category}</span>
          <span>unit price: {item.price}</span>
        </SubInfo>
        <SubInfo>
          <span>max volume: {item.volume}</span>
          <span>donation: {item.donationRatio}%</span>
        </SubInfo>
      </ItemItemBlock>
      <StyledInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
        name="title"
      />
      <StyledInput
        placeholder="목표수량을 입력하세요"
        onChange={onChangeTargetQuantity}
        value={targetQuantity}
        name="targetQuantity"
      />
      <StyledInput
        placeholder="만료일을 입력하세요"
        onChange={onChangeExpiresAt}
        value={expiresAt}
        name="expiresAt"
      />

      <WriteActionButtonsBlock>
        <StyledButton teal type="submit">
          품목 추가
        </StyledButton>
        <StyledButton red onClick={onCancel}>
          취소
        </StyledButton>
      </WriteActionButtonsBlock>
    </WriteDonationBlock>
  );
};

export default WriteDonation;
