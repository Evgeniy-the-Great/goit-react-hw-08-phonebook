import { createAction } from "@reduxjs/toolkit";

const singUpRequest = createAction("register/singUpRequest");
const singUpSuccess = createAction("register/singUpSuccess");
const singUpError = createAction("register/singUpError");

const singInRequest = createAction("register/singInRequest");
const singInSuccess = createAction("register/singInSuccess");
const singInError = createAction("register/singInError");

const singOutRequest = createAction("register/singOutRequest");
const singOutSuccess = createAction("register/singOutSuccess");
const singOutError = createAction("register/singOutError");

export {
  singUpError,
  singUpSuccess,
  singUpRequest,
  singInRequest,
  singInSuccess,
  singInError,
  singOutRequest,
  singOutSuccess,
  singOutError,
};
