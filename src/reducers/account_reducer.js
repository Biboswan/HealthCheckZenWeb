import { LOGIN, LOGOUT } from "../constants";

const INITIAL_STATE = {
  loginDetails: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginDetails: action.payload };
    case LOGOUT:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}
