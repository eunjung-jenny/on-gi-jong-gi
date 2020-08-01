import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as donatorsAPI from '../lib/api/donators';
import { takeLatest } from 'redux-saga/effects';

const READ_DONATOR = 'donator/READ_DONATOR';
const READ_DONATOR_SUCCESS = 'donator/READ_DONATOR_SUCCESS';
const READ_DONATOR_FAILURE = 'donator/READ_DONATOR_FAILURE';
const UNLOAD_DONATOR = 'donator/UNLOAD_DONATOR';

export const readDonator = createAction(READ_DONATOR, (id) => id);
export const unloadDonator = createAction(UNLOAD_DONATOR);

const readDonatorSaga = createRequestSaga(
  READ_DONATOR,
  donatorsAPI.readDonator,
);
export function* donatorSaga() {
  yield takeLatest(READ_DONATOR, readDonatorSaga);
}

const initialState = {
  donator: {
    id: 1,
  },
  error: null,
};

const donator = handleActions(
  {
    [READ_DONATOR_SUCCESS]: (state, { payload: donator }) => ({
      ...state,
      donator,
    }),
    [READ_DONATOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_DONATOR]: () => initialState,
  },
  initialState,
);

export default donator;
