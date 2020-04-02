import { UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS } from "../constants";
import { submitAnswers as submitAnswersApi } from "../api/questions";

export const updateAnswers = (qid, answer, answeredAll = false) => {
    return dispatch => {
        dispatch({ type: UPDATE_ANSWERS, payload: { qid, answer, answeredAll }});
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
