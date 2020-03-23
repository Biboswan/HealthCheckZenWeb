import { LOGIN, LOGOUT, SIGNUP } from "../constants";

import { signup, login } from "../api/auth";

export const loginUser = ({ email, password }) => {
  return async dispatch => {
    try {
      const { data } = await login(email, password);
      console.log(data);
      dispatch({ type: LOGIN, payload: data });
    } catch (err) {}
  };
};
