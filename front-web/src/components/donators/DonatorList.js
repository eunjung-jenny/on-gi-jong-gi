import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';

const DonatorListBlock = styled(Main)`
  margin-top: 3rem;
  height: calc(100% - 7rem);
`;
const DonatorItemBlock = styled.div`
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
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
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
      {!loading && donators && (
        <div>
          {donators.map((donator) => (
            <DonatorItem donator={donator} key={donator.id} />
          ))}
        </div>
      )}
    </DonatorListBlock>
  );
};

export default DonatorList;
