import { UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS } from "../constants";
import { submitAnswers } from "../api/questions";

export const updateAnswers = (questionId, newAnswer) => {
    return dispatch => {
        dispatch({ type: UPDATE_ANSWERS, payload: { [questionId] : newAnswer }})
    }
};

export const submitAnswers = (questionId, answer) => {
    return async (dispatch, getState) => {
        dispatch({ type: SUBMITING_ANSWERS })
        try {
            dispatch({ type:SUBMIT_ANSWERS, payload: {}});
        } catch(err) {

        }
    }
}
