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
export const API_ROOT = proxyurl+"34.214.134.126:8192";

/**
 * ACTION TYPES
 */
export const LOGIN = "Login";
export const LOGOUT = "Logout";
export const SIGNUP = "Sign-up";
export const FETCH_QUESTIONS = 'Fetch_questions';
export const FETCHING_QUESTIONS = 'Fetching_questions';
export const SUBMITING_ANSWERS = 'Submiting_answers';
export const SUBMIT_ANSWERS = 'Submit_answers';
export const SET_CURRENT_QUESTION_ID = 'Set_Current_Question_Id';
export const UPDATE_ANSWERS = 'Update_answers';
export const GO_TO_NEXT_Q = 'Go_To_Next_Question';

/**
 * Languages
 */
export const Language = {
  'en': 'English',
  'hi': 'हिन्दी',
  'bn': 'বাংলা'
};
