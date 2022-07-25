import { AnyAction } from "@reduxjs/toolkit";

export interface InitialState {
  isLogin?: boolean;
  user?: any;
}

export interface InitialStateAction extends AnyAction {
  payload: InitialState;
}

export interface DefaultActionTypes {
  LOGIN_REQUEST: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILURE: string;
}

export interface DefaultActionCreators {
  loginRequest: (payload: InitialStateAction["payload"]) => InitialStateAction;
  loginSuccess: (payload: InitialStateAction["payload"]) => InitialStateAction;
  loginFailure: (payload: InitialStateAction["payload"]) => InitialStateAction;
}
