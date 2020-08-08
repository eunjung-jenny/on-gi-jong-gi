import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as donatorsAPI from '../lib/api/donators';
import { takeLatest } from 'redux-saga/effects';

const LIST_DONATORS = 'donators/LIST_DONATORS';
const LIST_DONATORS_SUCCESS = 'donators/LIST_DONATORS_SUCCESS';
const LIST_DONATORS_FAILURE = 'donators/LIST_DONATORS_FAILURE';

export const listDonators = createAction(LIST_DONATORS, ({ id, userType }) => ({
  id,
  userType,
}));

const listDonatorsSaga = createRequestSaga(
  LIST_DONATORS,
  donatorsAPI.listDonators,
);
export function* donatorsSaga() {
  yield takeLatest(LIST_DONATORS, listDonatorsSaga);
}

const initialState = {
  donators: [
    {
      id: 1,
      createdAt: '2020-08-01',
      userName: '전은정',
      email: 'jenny@poomuro.com',
      followings: [],
    },
    {
      id: 2,
      createdAt: '2020-08-01',
      userName: '차영부',
      email: 'kenny@poomuro.com',
      followings: [],
    },
    {
      id: 3,
      createdAt: '2020-08-01',
      userName: '정윤환',
      email: 'unani@poomuro.com',
      followings: [],
    },
  ],
  error: null,
};

const donators = handleActions(
  {
    [LIST_DONATORS_SUCCESS]: (state, { payload: donators }) => ({
      ...state,
      donators,
    }),
    [LIST_DONATORS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default donators;
