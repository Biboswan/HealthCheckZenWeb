import { UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS } from "../constants";

const INITIAL_STATE = {
    answers: null,
    submitingAnswers: false,
    submitedAnswers: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case UPDATE_ANSWERS:
        return { ...state, answers: { ...state.answers, ...action.payload } };
      case SUBMITING_ANSWERS:
        return { ...state, submitingAnswers: true }
      case SUBMIT_ANSWERS:
        return { ...state, submitingAnswers: false, submitedAnswers: action.payload};
      default:
        return state;
    }
}
