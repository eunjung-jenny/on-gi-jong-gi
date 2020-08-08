import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../common/Main';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const ItemListBlock = styled(Main)`
  margin-top: 3rem;
  width: 100%;
  height: calc(100% - 7rem);
  > div {
    display: grid;
    grid-template-columns: repeat(3, 500px);
    grid-auto-rows: 550px;
    grid-gap: 1rem;
  }
`;
const ItemItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  /* background: ${palette.teal[1]}; */
  width: 100%;

  &:first-child {
    padding-top: 0;
  }
  
  h2 {
    font-size: 1.75rem;
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
  display: flex;
  align-items: flex-end;
  font-size: 1.125rem;
  h2 {
    margin-right: 2rem;
  }
  span {
    color: ${palette.gray[6]};
  }
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const ItemItem = ({ item, userType }) => {
  const {
    id,
    createdAt,
    name,
    category,
    price,
    maxVolume,
    countedVolume,
    donationRatio,
    image,
    user,
    donations,
  } = item;
  return (
    <ItemItemBlock>
      <SubInfo>
        <h2>{name.length < 30 ? name : name.slice(0, 30)}</h2>
        <span>
          <b>{user.userName}</b>
        </span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </SubInfo>
      <img
        src={image}
        style={{ width: '300px', height: '300px', margin: '1rem' }}
        alt="item"
      ></img>
      <SubInfo>
        <span>분류: {category}</span>
        <span>가격: {price}원</span>
      </SubInfo>
      <SubInfo>
        <span>총 수량: {maxVolume}개</span>
        <span>완료수량: {countedVolume}개</span>
      </SubInfo>
      <SubInfo>
        <span>추가 기부비율: {donationRatio}%</span>
        <span>신청된 기부: {donations.length}회</span>
      </SubInfo>
      {userType === 'institution' ? (
        <Link to={`/item/${id}`}>
          <ButtonWithMarginTop teal fullWidth>
            신청하기
          </ButtonWithMarginTop>
        </Link>
      ) : (
        <ButtonWithMarginTop teal fullWidth>
          삭제하기
        </ButtonWithMarginTop>
      )}
    </ItemItemBlock>
  );
};

const ItemList = ({ items, loading, error, userType }) => {
  // if (error) {
  //   return <ItemListBlock>에러가 발생했습니다</ItemListBlock>;
  // }
  return (
    <ItemListBlock>
      <h1>물품 목록 ({items.length})</h1>
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
