import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as donationsAPI from '../lib/api/donations';
import { takeLatest } from 'redux-saga/effects';

const LIST_DONATIONS = 'donations/LIST_DONATIONS';
const LIST_DONATIONS_SUCCESS = 'donations/LIST_DONATIONS_SUCCESS';
const LIST_DONATIONS_FAILURE = 'donations/LIST_DONATIONS_FAILURE';

export const listDonations = createAction(
  LIST_DONATIONS,
  ({ id, userType }) => ({
    id,
    userType,
  }),
);

const listDonationsSaga = createRequestSaga(
  LIST_DONATIONS,
  donationsAPI.listDonations,
);
export function* donationsSaga() {
  yield takeLatest(LIST_DONATIONS, listDonationsSaga);
}

const initialState = {
  donations: [
    {
      id: 1,
      createdAt: '2020-08-05',
      item: {
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
      },
      user: {
        id: 2,
        userName: 'B 아동양육기관',
        userType: 'institution',
      },
      title: '아이들이 좋아하는 라면 간식 기부 부탁드려요',
      targetQuantity: 20,
      expiresAt: '2020-09-01',
      targetReached: false,
    },
    // {
    //   id: 3,
    //   createdAt: '2020-08-05',
    //   item: {
    //     id: 2,
    //     createdAt: '2020-07-21',
    //     name: '안성탕면',
    //     category: '라면',
    //     price: 2500,
    //     maxVolume: 300,
    //     countedVolume: 250,
    //     donationRatio: 10,
    //     image:
    //       'https://res.cloudinary.com/kennycld/image/upload/v1596870151/%ED%91%B8%EB%AF%80%EB%A1%9C/%EC%95%88%EC%84%B1%ED%83%95%EB%A9%B4_hgjzar.jpg',
    //     user: {
    //       id: 1,
    //       userName: '주식회사 A식품',
    //       userType: 'company',
    //     },
    //   },
    //   user: {
    //     id: 2,
    //     userName: 'C 노인회관',
    //     userType: 'institution',
    //   },
    //   title: '회관 잔치를 위한 라면을 후원해주세요',
    //   targetQuantity: 30,
    //   expiresAt: '2020-09-01',
    //   targetReached: false,
    // },
    {
      id: 2,
      createdAt: '2020-08-05',
      item: {
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
      },
      user: {
        id: 2,
        userName: 'B 아동양육기관',
        userType: 'institution',
      },
      title: '아이들 간식용 라면을 기부해주세요',
      targetQuantity: 30,
      expiresAt: '2020-09-01',
      targetReached: false,
    },
  ],
  error: null,
};

const donations = handleActions(
  {
    [LIST_DONATIONS_SUCCESS]: (state, { payload: donations }) => ({
      ...state,
      donations,
    }),
    [LIST_DONATIONS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default donations;
