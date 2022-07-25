import { fork } from "redux-saga/effects";

import { watchLoginRequest } from "./loginRequest";

export const loginSagas = [fork(watchLoginRequest)];
