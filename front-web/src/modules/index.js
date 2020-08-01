import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import item, { itemSaga } from './item';
import items, { itemsSaga } from './items';
import donation, { donationSaga } from './donation';
import donations, { donationsSaga } from './donations';
import donator, { donatorSaga } from './donator';
import donators, { donatorsSaga } from './donators';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  item,
  items,
  donation,
  donations,
  donator,
  donators,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    itemSaga(),
    itemsSaga(),
    donationSaga(),
    donationsSaga(),
    donatorSaga(),
    donatorsSaga(),
  ]);
}

export default rootReducer;
