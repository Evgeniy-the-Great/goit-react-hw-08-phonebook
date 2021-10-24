import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  singInError,
  singInRequest,
  singInSuccess,
  singOutError,
  singOutRequest,
  singOutSuccess,
  singUpError,
  singUpRequest,
  singUpSuccess,
} from "./regisretActions";

const registerUserReducer = createReducer(null, {
  [singUpSuccess]: (_, { payload }) => ({
    displayName: payload.displayName,
    email: payload.email,
  }),
  [singInSuccess]: (_, { payload }) => ({
    displayName: payload.displayName,
    email: payload.email,
  }),
  [singOutSuccess]: () => null,
});

const registerTokenReducer = createReducer(null, {
  [singUpSuccess]: (_, { payload }) => ({
    idToken: payload.idToken,
    refreshToken: payload.refreshToken,
    localId: payload.localId,
  }),
  [singInSuccess]: (_, { payload }) => ({
    idToken: payload.idToken,
    refreshToken: payload.refreshToken,
    localId: payload.localId,
  }),
  [singOutSuccess]: () => null,
});

const setErrorReducer = createReducer("", {
  [singUpError]: (_, { payload }) => payload,
  [singInError]: (_, { payload }) => payload,
  [singOutError]: (_, { payload }) => payload,
  [singOutSuccess]: () => null,
});

const setLoaderReducer = createReducer(false, {
  [singUpRequest]: () => true,
  [singInRequest]: () => true,
  [singOutRequest]: () => true,

  [singUpSuccess]: () => false,
  [singInSuccess]: () => false,
  [singOutSuccess]: () => false,

  [singUpError]: () => false,
  [singInError]: () => false,
  [singOutError]: () => false,
});

export const registerReducer = combineReducers({
  user: registerUserReducer,
  tokens: registerTokenReducer,
  loader: setLoaderReducer,
  error: setErrorReducer,
});
