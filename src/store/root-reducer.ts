import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./login";

export const rootReducer = combineReducers({
  login: loginReducer,
});
