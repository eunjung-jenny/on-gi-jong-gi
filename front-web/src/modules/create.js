import { createAction, handleActions } from 'redux-actions';
import * as itemsAPI from '../lib/api/items';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';

const INITIALIZE = 'create/INITIALIZE';
const CHANGE_FIELD = 'create/CHANGE_FIELD';
const CREATE_ITEM = 'create/CREATE_ITEM';
const CREATE_ITEM_SUCCESS = 'create/CREATE_ITEM_SUCCESS';
const CREATE_ITEM_FAILURE = 'create/CREATE_ITEM_FAILURE';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const createItem = createAction(
  CREATE_ITEM,
  ({ name, category, price, volume, donationRatio, image }) => ({
    name,
    category,
    price,
    volume,
    donationRatio,
    image,
  }),
);

const createItemSaga = createRequestSaga(CREATE_ITEM, itemsAPI.createItem);
export function* createSaga() {
  yield takeLatest(CREATE_ITEM, createItemSaga);
}

// initial state
const initialState = {
  name: '',
  category: '',
  price: '',
  volume: '',
  donationRatio: '',
  image: '',
  item: null,
  itemError: null,
};

// reducer
const create = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CREATE_ITEM]: (state) => ({
      ...state,
      item: null,
      itemError: null,
    }),
    [CREATE_ITEM_SUCCESS]: (state, { payload: item }) => ({
      ...state,
      item,
    }),
    [CREATE_ITEM_FAILURE]: (state, { payload: itemError }) => ({
      ...state,
      itemError,
    }),
  },
  initialState,
);

export default create;
