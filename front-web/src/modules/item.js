import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as itemsAPI from '../lib/api/items';
import { takeLatest } from 'redux-saga/effects';

const READ_ITEM = 'item/READ_ITEM';
const READ_ITEM_SUCCESS = 'item/READ_ITEM_SUCCESS';
const READ_ITEM_FAILURE = 'item/READ_ITEM_FAILURE';
const UNLOAD_ITEM = 'item/UNLOAD_ITEM';

export const readItem = createAction(READ_ITEM, (id) => id);
export const unloadItem = createAction(UNLOAD_ITEM);

const readItemSaga = createRequestSaga(READ_ITEM, itemsAPI.readItem);
export function* itemSaga() {
  yield takeLatest(READ_ITEM, readItemSaga);
}

const initialState = {
  item: {
    id: 1,
  },
  error: null,
};

const item = handleActions(
  {
    [READ_ITEM_SUCCESS]: (state, { payload: item }) => ({
      ...state,
      item,
    }),
    [READ_ITEM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_ITEM]: () => initialState,
  },
  initialState,
);

export default item;
