/**
 * Color Palette
 */
export const color = {
  FIERY_COLOR: "#FF5D73",
  TROLLEY_GREY: "grey",
  OUTER_SPACE: "494949",
  WHITE: "#FFF",
  REGISTRATION_BLACK: "#000"
};

/**
 * API  ENDPOINT ADDRESS
 * issue with cors: hack https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
 */
const proxyurl = "https://cors-anywhere.herokuapp.com/";
export const API_ROOT = proxyurl+"http://34.93.21.176";

/**
 * ACTION TYPES
 */
export const LOGIN = "Login";
export const LOGOUT = "Logout";
export const SIGNUP = "Sign-up";
export const FETCH_QUESTIONS = 'Fetch_questios';
export const FETCHING_QUESTIONS = 'Fetching_questions';
