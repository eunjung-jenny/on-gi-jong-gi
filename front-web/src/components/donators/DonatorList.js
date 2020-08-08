import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const DonatorListBlock = styled(Main)`
  /* margin-left: 8rem; */
  margin-top: 3rem;
  width: 1000px;
  height: calc(100% - 7rem);
`;
const DonatorItemBlock = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.teal[2]};
  }
  h1 {
    font-size: 1.25rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-left: 2rem;
    margin-top: 0.1rem;
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const DonatorItem = ({ donator }) => {
  const { userName, email } = donator;
  return (
    <DonatorItemBlock>
      <h1>{userName}</h1>
      <p>{email}</p>
    </DonatorItemBlock>
  );
};

const DonatorList = ({ donators, loading, error }) => {
  // if (error) {
  //   return <ItemListBlock>에러가 발생했습니다</ItemListBlock>;
  // }
  return (
    <DonatorListBlock>
      <h1>기부자 목록 ({donators.length})</h1>
      {!loading && donators && (
        <div>
          {donators.map((donator) => (
            <DonatorItem donator={donator} key={donator.id} />
          ))}
        </div>
      )}
      <ButtonWithMarginTop teal fullWidth>
        전체메일 작성하기
      </ButtonWithMarginTop>
    </DonatorListBlock>
  );
};

export default DonatorList;
