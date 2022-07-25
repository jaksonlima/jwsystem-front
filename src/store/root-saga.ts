import { all } from "redux-saga/effects";

import { loginSagas } from "./login/sagas";

export function* rootSaga() {
  yield all([...loginSagas]);
}
