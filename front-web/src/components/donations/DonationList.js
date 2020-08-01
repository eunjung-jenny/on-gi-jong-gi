import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';

const DonationListBlock = styled(Main)`
  margin-top: 3rem;
  height: calc(100% - 7rem);
`;
const DonationItemBlock = styled.div`
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
const SubInfo = styled.div`
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const DonationItem = ({ donation }) => {
  const {
    id,
    createdAt,
    item,
    user,
    title,
    targetQuantity,
    expiresAt,
    targetReached,
  } = donation;
  return (
    <DonationItemBlock>
      <div>
        <Link to={`/donation/${id}`}>
          <h1>{title}</h1>
        </Link>
      </div>
      <SubInfo>
        <span>
          <b>{user.userName}</b>
        </span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </SubInfo>
      <SubInfo>
        <span>item: {item.name}</span>
        <span>{item.user.userName}</span>
        <span>target quantity: {targetQuantity}</span>
      </SubInfo>
      <SubInfo>
        <span>expires at: {expiresAt}</span>
        <span>target reached: {targetReached ? 'true' : 'false'}</span>
      </SubInfo>
    </DonationItemBlock>
  );
};

const DonationList = ({ donations, loading, error }) => {
  // if (error) {
  //   return <ItemListBlock>에러가 발생했습니다</ItemListBlock>;
  // }
  return (
    <DonationListBlock>
      {!loading && donations && (
        <div>
          {donations.map((donation) => (
            <DonationItem donation={donation} key={donation.id} />
          ))}
        </div>
      )}
    </DonationListBlock>
  );
};

export default DonationList;
