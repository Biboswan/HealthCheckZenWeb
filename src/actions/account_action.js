import { LOGIN, LOGOUT } from "../constants";
import { login } from "../api/auth";

export const loginUser = ({ email, password }) => {
  return async dispatch => {
    try {
      const { data } = await login(email, password);
      console.log('data', data);
      dispatch({ type: LOGIN, payload: data });
    } catch (err) {
      if (err.response) {
        dispatch({ type: LOGIN, payload: err.response.data });
      }
    }
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
  }
};
