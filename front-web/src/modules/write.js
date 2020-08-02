import { createAction, handleActions } from 'redux-actions';
import * as donationsAPI from '../lib/api/donations';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const WRITE_DONATION = 'write/WRITE_DONATION';
const WRITE_DONATION_SUCCESS = 'write/WRITE_DONATION_SUCCESS';
const WRITE_DONATION_FAILURE = 'write/WRITE_DONATION_FAILURE';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeDonation = createAction(
  WRITE_DONATION,
  ({ item, title, targetQuantity, expiresAt }) => ({
    item,
    title,
    targetQuantity,
    expiresAt,
  }),
);

const writeDonationSaga = createRequestSaga(
  WRITE_DONATION,
  donationsAPI.writeDonation,
);
export function* writeSaga() {
  yield takeLatest(WRITE_DONATION, writeDonationSaga);
}

const initialState = {
  item: {
    id: 1,
    createdAt: '2020-08-01',
    name: 'example item',
    category: 'anything',
    price: 500,
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
  title: '',
  targetQuantity: '',
  expiresAt: '',
  donation: null,
  donationError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_DONATION]: (state) => ({
      ...state,
      donation: null,
      donationError: null,
    }),
    [WRITE_DONATION_SUCCESS]: (state, { payload: donation }) => ({
      ...state,
      donation,
    }),
    [WRITE_DONATION_FAILURE]: (state, { payload: donationError }) => ({
      ...state,
      donationError,
    }),
  },
  initialState,
);

export default write;
