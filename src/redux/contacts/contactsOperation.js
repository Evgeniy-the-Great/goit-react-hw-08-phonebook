import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
} from "./contactsActions";

// ===========addContactOperation===============

const addContactOperation = (contacts) => async (dispatch, getState) => {
  const localId = getState().register.tokens.localId;
  dispatch(addContactRequest());
  try {
    const response = await axios.post(
      `https://phonebook-de2b8-default-rtdb.firebaseio.com/contacts/${localId}.json`,
      contacts
    );
    dispatch(addContactSuccess({ ...contacts, id: response.data.name }));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

// ===========getContactOperation===============

const getContactOperation = () => async (dispatch, getState) => {
  const localId = getState().register.tokens.localId;
  dispatch(getContactsRequest());
  try {
    const response = await axios.get(
      `https://phonebook-de2b8-default-rtdb.firebaseio.com/contacts/${localId}.json`
    );

    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContactsSuccess(contacts));
    }
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

// ===========deleteContactOperation===============

const deleteContactOperation = (id) => async (dispatch, getState) => {
  const localId = getState().register.tokens.localId;
  dispatch(deleteContactRequest());
  try {
    await axios.delete(
      `https://phonebook-de2b8-default-rtdb.firebaseio.com/contacts/${localId}/${id}.json`
    );

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export { addContactOperation, getContactOperation, deleteContactOperation };
