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
    },
    {
      id: 2,
    },
    {
      id: 3,
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
