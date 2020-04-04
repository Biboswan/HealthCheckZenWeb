import { UPDATE_ANSWERS, SUBMITING_ANSWERS, SUBMIT_ANSWERS } from "../constants";
import { submitAnswers as submitAnswersApi } from "../api/questions";

export const updateAnswers = (qid, answer, answeredAll = false, weight) => {
    return dispatch => {
        dispatch({ type: UPDATE_ANSWERS, payload: { qid, answer, answeredAll, weight }});
    }
};

export const submitAnswers = () => {
    return async (dispatch, getState) => {
        dispatch({ type: SUBMITING_ANSWERS })
        try {
            const { answers } = getState().answersReducer;
            let answersParam = {};
            let final_weight = 0;
            for (let key in answers) {
                answersParam[key] = answers[key].res ==="yes" ? true: false;
                final_weight += answers[key].weight;
            }

            const location = JSON.parse(localStorage.getItem('location'));
            const { loginDetails } = getState().accountReducer;
            const { token } = loginDetails;
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            user_details = {...user_details, final_weight, question_answer: answersParam, location };
            const { data } = await submitAnswersApi(token, user_details);
            dispatch({ type:SUBMIT_ANSWERS, payload: data });
        } catch(err) {

        }
    }
}
