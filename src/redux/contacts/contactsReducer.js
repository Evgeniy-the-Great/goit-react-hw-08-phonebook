import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { singOutSuccess } from "../register/regisretActions";
import {
  filterContact,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  resetError,
} from "./contactsActions";

const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [getContactsSuccess]: (_, { payload }) => payload,
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [singOutSuccess]: () => [],
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
  [singOutSuccess]: () => "",
});

const loaderReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [addContactRequest]: () => true,
  [deleteContactRequest]: () => true,

  [getContactsSuccess]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactSuccess]: () => false,

  [getContactsError]: () => false,
  [addContactError]: () => false,
  [deleteContactError]: () => false,
  [singOutSuccess]: () => false,
});

const errorReducer = createReducer("", {
  [resetError]: () => "",
  [getContactsError]: (_, action) => action.payload,
  [addContactError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload,
  [singOutSuccess]: () => "",
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});
