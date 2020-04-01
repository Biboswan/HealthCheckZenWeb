import { FETCHING_QUESTIONS, FETCH_QUESTIONS, SET_CURRENT_QUESTION_ID } from "../constants";

const INITIAL_STATE = {
  questions: null,
  isFetchingQuestions: false,
  currentQuestionId: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload, isFetchingQuestions: false };
    case FETCHING_QUESTIONS:
      return { ...state, isFetchingQuestions: true };
    case  SET_CURRENT_QUESTION_ID:
      return { ...state, currentQuestionId: action.payload };
    default:
      return state;
  }
}
