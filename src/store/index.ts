import { configureStore, Store } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import Immutable from "seamless-immutable";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const reducerHydrate = (state: any, action: any) => {
  if (HYDRATE === action.type) {
    return Immutable({ ...state, ...action.payload });
  } else {
    return rootReducer(state, action);
  }
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: reducerHydrate,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV === "development",
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, {
  debug: false,
});
