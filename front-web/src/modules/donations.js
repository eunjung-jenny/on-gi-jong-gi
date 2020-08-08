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
        name: 'example item',
        category: 'anything',
        volume: 200,
        donationRatio: 20,
        image:
          'https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters05_ifoidc.png',
        user: {
          id: 1,
          userName: 'kenny company',
          userType: 'company',
        },
      },
      user: {
        id: 2,
        userName: 'unani institution',
        userType: 'institution',
      },
      title: 'example donation request',
      targetQuantity: 50,
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
