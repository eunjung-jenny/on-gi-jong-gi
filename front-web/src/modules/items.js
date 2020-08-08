import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as itemsAPI from '../lib/api/items';
import { takeLatest } from 'redux-saga/effects';

const LIST_ITEMS = 'items/LIST_ITEMS';
const LIST_ITEMS_SUCCESS = 'items/LIST_ITEMS_SUCCESS';
const LIST_ITEMS_FAILURE = 'items/LIST_ITEMS_FAILURE';

export const listItems = createAction(LIST_ITEMS, ({ id, userType }) => ({
  id,
  userType,
}));

const listItemsSaga = createRequestSaga(LIST_ITEMS, itemsAPI.listItems);
export function* itemsSaga() {
  yield takeLatest(LIST_ITEMS, listItemsSaga);
}

const initialState = {
  items: [
    {
      id: 1,
      createdAt: '2020-08-01',
      name: '신라면',
      category: '라면',
      price: 3000,
      maxVolume: 400,
      countedVolume: 200,
      donationRatio: 10,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870150/%ED%91%B8%EB%AF%80%EB%A1%9C/%EC%8B%A0%EB%9D%BC%EB%A9%B4_glo1r1.jpg',
      user: {
        id: 1,
        userName: '주식회사 A식품',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 2,
      createdAt: '2020-07-21',
      name: '안성탕면',
      category: '라면',
      price: 2500,
      maxVolume: 300,
      countedVolume: 250,
      donationRatio: 10,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870151/%ED%91%B8%EB%AF%80%EB%A1%9C/%EC%95%88%EC%84%B1%ED%83%95%EB%A9%B4_hgjzar.jpg',
      user: {
        id: 1,
        userName: '주식회사 A식품',
        userType: 'company',
      },
      donations: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ],
    },
    {
      id: 3,
      createdAt: '2020-07-11',
      name: '짜파게티',
      category: '라면',
      price: 2500,
      maxVolume: 300,
      countedVolume: 100,
      donationRatio: 5,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870151/%ED%91%B8%EB%AF%80%EB%A1%9C/%EC%A7%9C%ED%8C%8C%EA%B2%8C%ED%8B%B0_fesgjq.jpg',
      user: {
        id: 1,
        userName: '주식회사 A식품',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 4,
      createdAt: '2020-07-27',
      name: '양파깡',
      category: '과자',
      price: 1500,
      maxVolume: 500,
      countedVolume: 200,
      donationRatio: 5,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870150/%ED%91%B8%EB%AF%80%EB%A1%9C/%EC%96%91%ED%8C%8C%EA%B9%A1_yergsk.jpg',
      user: {
        id: 1,
        userName: '주식회사 A식품',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    },
    {
      id: 5,
      createdAt: '2020-07-10',
      name: '자갈치',
      category: '과자',
      price: 1500,
      maxVolume: 500,
      countedVolume: 50,
      donationRatio: 5,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870151/%ED%91%B8%EB%AF%80%EB%A1%9C/%EC%9E%90%EA%B0%88%EC%B9%98_fibpkr.jpg',
      user: {
        id: 1,
        userName: '주식회사 A식품',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 6,
      createdAt: '2020-06-20',
      name: '꿀꽈배기',
      category: '과자',
      price: 1500,
      maxVolume: 300,
      countedVolume: 200,
      donationRatio: 5,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870150/%ED%91%B8%EB%AF%80%EB%A1%9C/%EA%BF%80%EA%BD%88%EB%B0%B0%EA%B8%B0_fqozyj.jpg',
      user: {
        id: 1,
        userName: '주식회사 A식품',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 7,
      createdAt: '2020-08-01',
      name: '새우깡',
      category: '과자',
      price: 1500,
      maxVolume: 200,
      countedVolume: 100,
      donationRatio: 5,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870151/%ED%91%B8%EB%AF%80%EB%A1%9C/%EC%83%88%EC%9A%B0%EA%B9%A1_qd5i6o.jpg',
      user: {
        id: 1,
        userName: '주식회사 A식품',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    },
    {
      id: 8,
      createdAt: '2020-08-01',
      name: '마스크 AA',
      category: '마스크',
      price: 2500,
      maxVolume: 600,
      countedVolume: 200,
      donationRatio: 10,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870150/%ED%91%B8%EB%AF%80%EB%A1%9C/%EB%A7%88%EC%8A%A4%ED%81%AC1_shrl5b.jpg',
      user: {
        id: 1,
        userName: 'AA 마스크 회사',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    },
    {
      id: 9,
      createdAt: '2020-07-21',
      name: '마스크 BB',
      category: '마스크',
      price: 2500,
      maxVolume: 500,
      countedVolume: 400,
      donationRatio: 10,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870151/%ED%91%B8%EB%AF%80%EB%A1%9C/%EB%A7%88%EC%8A%A4%ED%81%AC2_c08ekq.jpg',
      user: {
        id: 1,
        userName: 'BB 마스크 회사',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 10,
      createdAt: '2020-07-22',
      name: '마스크 CC',
      category: '마스크',
      price: 2500,
      maxVolume: 600,
      countedVolume: 400,
      donationRatio: 10,
      image:
        'https://res.cloudinary.com/kennycld/image/upload/v1596870151/%ED%91%B8%EB%AF%80%EB%A1%9C/%EB%A7%88%EC%8A%A4%ED%81%AC3_qsgzyp.jpg',
      user: {
        id: 1,
        userName: 'BB 마스크 회사',
        userType: 'company',
      },
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
  ],
  error: null,
};

const items = handleActions(
  {
    [LIST_ITEMS_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      items,
    }),
    [LIST_ITEMS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default items;
