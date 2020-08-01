import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';

const ItemListBlock = styled(Main)`
  margin-top: 3rem;
  height: calc(100% - 7rem);
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

const ItemItem = ({ item, userType }) => {
  const {
    id,
    createdAt,
    name,
    category,
    price,
    volume,
    donationRatio,
    image,
    user,
    donations,
  } = item;
  return (
    <ItemItemBlock>
      {userType === 'institution' ? (
        <Link to={`item/${id}`}>
          <h2>{name.length < 30 ? name : name.slice(0, 30)}</h2>
          <b>(click to donation request)</b>
        </Link>
      ) : (
        <h2>{name.length < 30 ? name : name.slice(0, 30)}</h2>
      )}
      <SubInfo>
        <span>
          <b>{user.userName}</b>
        </span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </SubInfo>

      <img src={image} alt="item"></img>
      <SubInfo>
        <span>category: {category}</span>
        <span>unit price: {price}</span>
      </SubInfo>
      <SubInfo>
        <span>max volume: {volume}</span>
        <span>donation: {donationRatio}%</span>
      </SubInfo>
      <p>donations count: {donations.length}</p>
    </ItemItemBlock>
  );
};

const ItemList = ({ items, loading, error, userType }) => {
  // if (error) {
  //   return <ItemListBlock>에러가 발생했습니다</ItemListBlock>;
  // }
  return (
    <ItemListBlock>
      {!loading && items && (
        <div>
          {items.map((item) => (
            <ItemItem item={item} key={item.id} userType={userType} />
          ))}
        </div>
      )}
    </ItemListBlock>
  );
};

export default ItemList;
