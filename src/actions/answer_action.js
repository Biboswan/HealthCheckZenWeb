import { UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS } from "../constants";

export const updateAnswers = newAnswer => {
    return dispatch => {
        dispatch({ type: UPDATE_ANSWERS, payload: newAnswer })
    }
};
