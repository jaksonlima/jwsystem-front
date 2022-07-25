import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

import {
  InitialState,
  InitialStateAction,
  DefaultActionTypes,
  DefaultActionCreators,
} from "./types";

export const { Creators, Types } = createActions<
  DefaultActionTypes,
  DefaultActionCreators
>({
  loginRequest: ["payload"],
  loginSuccess: ["payload"],
  loginFailure: ["payload"],
});

const INITIAL_STATE = Immutable<InitialState>({ isLogin: false });

const loginSuccess = (state = INITIAL_STATE, action: InitialStateAction) =>
  state.merge(action.payload);

const loginFailure = (state = INITIAL_STATE, action: InitialStateAction) =>
  state.merge(action.payload);

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});
