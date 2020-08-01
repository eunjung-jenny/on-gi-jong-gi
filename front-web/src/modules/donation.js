import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as donationsAPI from '../lib/api/donations';
import { takeLatest } from 'redux-saga/effects';

const READ_DONATION = 'donation/READ_DONATION';
const READ_DONATION_SUCCESS = 'donation/READ_DONATION_SUCCESS';
const READ_DONATION_FAILURE = 'donation/READ_DONATION_FAILURE';
const UNLOAD_DONATION = 'donation/UNLOAD_DONATION';

export const readDonation = createAction(READ_DONATION, (id) => id);
export const unloadDonation = createAction(UNLOAD_DONATION);

const readDonationSaga = createRequestSaga(
  READ_DONATION,
  donationsAPI.readDonation,
);
export function* donationSaga() {
  yield takeLatest(READ_DONATION, readDonationSaga);
}

const initialState = {
  donation: {
    id: 1,
  },
  error: null,
};

const donation = handleActions(
  {
    [READ_DONATION_SUCCESS]: (state, { payload: donation }) => ({
      ...state,
      donation,
    }),
    [READ_DONATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_DONATION]: () => initialState,
  },
  initialState,
);

export default donation;
