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
