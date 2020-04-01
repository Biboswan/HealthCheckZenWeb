import { UPDATE_ANSWERS } from "../constants";

const INITIAL_STATE = {
    answers: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case UPDATE_ANSWERS:
        return { ...state, answers: action.payload };
      default:
        return state;
    }
}
