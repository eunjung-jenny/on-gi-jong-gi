import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as itemsAPI from '../lib/api/items';
import { takeLatest } from 'redux-saga/effects';

const LIST_ITEMS = 'items/LIST_ITEMS';
const LIST_ITEMS_SUCCESS = 'items/LIST_ITEMS_SUCCESS';
const LIST_ITEMS_FAILURE = 'items/LIST_ITEMS_FAILURE';

export const listItems = createAction(LIST_ITEMS, ({ id, userType }) => ({
  id,
  userType,
}));

const listItemsSaga = createRequestSaga(LIST_ITEMS, itemsAPI.listItems);
export function* itemsSaga() {
  yield takeLatest(LIST_ITEMS, listItemsSaga);
}

const initialState = {
  items: [
    {
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
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 2,
      createdAt: '2020-08-01',
      name: 'example item',
      category: 'example category',
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
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    {
      id: 3,
      createdAt: '2020-08-01',
      name: 'example item',
      category: 'example category',
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
      donations: [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
  ],
  error: null,
};

const items = handleActions(
  {
    [LIST_ITEMS_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      items,
    }),
    [LIST_ITEMS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default items;
