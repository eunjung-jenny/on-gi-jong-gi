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

const ItemItem = ({ item }) => {
  const { id, createdAt, title, description, image, user, donations } = item;
  return (
    <ItemItemBlock>
      <h2>
        <Link to={`item/${id}`}>
          {title.length < 30 ? title : title.slice(0, 30)}
        </Link>
      </h2>
      <SubInfo>
        <span>
          <b>{user.userName}</b>
        </span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </SubInfo>
      <p>
        {description.length < 200 ? description : description.slice(0, 200)}
      </p>
      <img src={image} alt="item"></img>
      <p>donations count: {donations.length}</p>
    </ItemItemBlock>
  );
};

const ItemList = ({ items, loading, error }) => {
  // if (error) {
  //   return <ItemListBlock>에러가 발생했습니다</ItemListBlock>;
  // }
  return (
    <ItemListBlock>
      {!loading && items && (
        <div>
          {items.map((item) => (
            <ItemItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </ItemListBlock>
  );
};

export default ItemList;
