import axios from "axios";
import {
  singInError,
  singInRequest,
  singInSuccess,
  singUpError,
  singUpRequest,
  singUpSuccess,
} from "./regisretActions";

// =================singUpOperation==============

const singUpOperation = (user) => async (dispatch) => {
  dispatch(singUpRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SINGUP_URL, user);
    dispatch(singUpSuccess(response.data));
  } catch (error) {
    dispatch(singUpError(error.response.data.error.message));
  }
};

// =================singINOperation==============

const singInOperation = (user) => async (dispatch) => {
  dispatch(singInRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SINGIN_URL, user);
    dispatch(singInSuccess(response.data));
  } catch (error) {
    dispatch(singInError(error.response.data.error.message));
  }
};

export { singUpOperation, singInOperation };
