import { FETCHING_QUESTIONS, FETCH_QUESTIONS } from "../constants";

const INITIAL_STATE = {
  questions: null,
  isFetchingQuestions: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload, isFetchingQuestions: false };
    case FETCHING_QUESTIONS:
      return { ...INITIAL_STATE, isFetchingQuestions: true };
    default:
      return state;
  }
}
