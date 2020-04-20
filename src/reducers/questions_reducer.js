import { LOGOUT, FETCHING_QUESTIONS, FETCH_QUESTIONS, SET_CURRENT_QUESTION_ID, GO_TO_NEXT_Q, GO_TO_PREV_Q } from "../constants";

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
    case GO_TO_NEXT_Q:
    case GO_TO_PREV_Q:
      return { ...state, currentQuestionId: action.payload.nextQid };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
