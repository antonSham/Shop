import { getItemsSuccess, getItemsFailure } from "../actions/index.js";
import { put, takeEvery, all, call } from "redux-saga/effects";
import { GET_ITEMS } from "../actions/index.js";

import { throwError } from "../actions/index.js";
import { GET_ITEMS_FAILURE } from "../actions/index.js";

function* fetchDataSaga() {
  try {
    const response = yield call(fetch, "http://localhost:3004/items");
    const responseJSON = yield response.json();
    yield put(getItemsSuccess(responseJSON));
  } catch (error) {
    yield put(getItemsFailure(error));
  }
}

function* watchFetchData() {
  yield takeEvery(GET_ITEMS, fetchDataSaga);
}

function* throwErrorSaga(action) {
  yield put(throwError(action.error.message));
}

function* watchThrowError() {
  yield takeEvery(GET_ITEMS_FAILURE, throwErrorSaga);
}

export default function* rootSaga() {
  yield all([watchFetchData(), watchThrowError()]);
}
