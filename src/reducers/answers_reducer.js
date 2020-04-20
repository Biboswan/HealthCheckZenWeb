import { LOGOUT, UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS, GO_TO_NEXT_Q, GO_TO_PREV_Q } from "../constants";

const INITIAL_STATE = {
    answers: null,
    answeredAll: false,
    submitingAnswers: false,
    submitedAnswers: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case UPDATE_ANSWERS:
        return { ...state, answers: { ...state.answers, [action.payload.qid]: { res: action.payload.answer, weight: action.payload.weight } },
          answeredAll: action.payload.answeredAll };
      case SUBMITING_ANSWERS:
        return { ...state, submitingAnswers: true }
      case SUBMIT_ANSWERS:
        return { ...state, submitingAnswers: false, submitedAnswers: action.payload};
      case GO_TO_NEXT_Q:
        return { ...state, answers: { ...state.answers, [action.payload.qid]: 
          { res: action.payload.answer, weight: action.payload.weight } }};
      case GO_TO_PREV_Q:
            let newAnswers = { ...state.answers };
            delete newAnswers[action.payload.qid];
            return { ...state, answeredAll: false, answers: newAnswers };
      case LOGOUT:
        return INITIAL_STATE;
      default:
        return state;
    }
}
