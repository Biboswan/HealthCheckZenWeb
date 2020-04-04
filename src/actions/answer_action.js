import { UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS } from "../constants";
import { submitAnswers as submitAnswersApi } from "../api/questions";

export const updateAnswers = (qid, answer, answeredAll = false) => {
    return dispatch => {
        dispatch({ type: UPDATE_ANSWERS, payload: { qid, answer, answeredAll }});
    }
};

export const submitAnswers = () => {
    return async (dispatch, getState) => {
        dispatch({ type: SUBMITING_ANSWERS })
        try {
            const { answers } = getState().answersReducer;
            let answersParam = {};
            for (let key in answers) {
                answersParam[key] = answers[key] ==="Yes" ? true: false;
            }

            const location = JSON.parse(localStorage.getItem('location'));
            const { loginDetails } = getState().accountReducer;
            const { token } = loginDetails;
            const { data } = await submitAnswersApi({token, answers: answersParam, location});
            dispatch({ type:SUBMIT_ANSWERS, payload: data });
        } catch(err) {

        }
    }
}
