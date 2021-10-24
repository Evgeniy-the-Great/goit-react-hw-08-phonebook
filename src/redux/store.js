import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsReducer";
import { registerReducer } from "./register/registerReduser";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    register: registerReducer,
  },
});

export default store;
