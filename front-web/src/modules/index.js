import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import item, { itemSaga } from './item';
import items, { itemsSaga } from './items';
import donation, { donationSaga } from './donation';
import donations, { donationsSaga } from './donations';
import donators, { donatorsSaga } from './donators';
import create, { createSaga } from './create';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  item,
  items,
  donation,
  donations,
  donators,
  create,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    itemSaga(),
    itemsSaga(),
    donationSaga(),
    donationsSaga(),
    donatorsSaga(),
    createSaga(),
  ]);
}

export default rootReducer;
