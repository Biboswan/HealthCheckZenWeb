import { UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS, GO_TO_NEXT_Q } from "../constants";

const INITIAL_STATE = {
    answers: null,
    answeredAll: false,
    submitingAnswers: false,
    submitedAnswers: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case UPDATE_ANSWERS:
        return { ...state, answers: { ...state.answers, [action.payload.qid]: action.payload.answer },
          answeredAll: action.payload.answeredAll };
      case SUBMITING_ANSWERS:
        return { ...state, submitingAnswers: true }
      case SUBMIT_ANSWERS:
        return { ...state, submitingAnswers: false, submitedAnswers: action.payload};
      case GO_TO_NEXT_Q:
        return { ...state, answers: { ...state.answers, [action.payload.qid]: action.payload.answer } };
      default:
        return state;
    }
}