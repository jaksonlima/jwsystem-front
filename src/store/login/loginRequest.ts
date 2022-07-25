import { takeLatest } from "redux-saga/effects";

import { Types } from ".";

function* loginRequest() {
  try {
  } catch (error) {}
}

export function* watchLoginRequest() {
  yield takeLatest(Types.LOGIN_REQUEST, loginRequest);
}
