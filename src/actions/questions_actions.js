import { FETCHING_QUESTIONS, FETCH_QUESTIONS, SET_CURRENT_QUESTION_ID } from "../constants";
import { fetchQuestionsApi } from "../api/questions";

export const fetchQuestions = () => {
    return async (dispatch, getState) => {
        try {
            const { loginDetails } = getState().accountReducer;

            if (loginDetails && loginDetails.token) {
                const { token } = loginDetails;
                dispatch({ type: FETCHING_QUESTIONS });
                const { data } = await fetchQuestionsApi(token);
                dispatch({ type: FETCH_QUESTIONS, payload: data.preordered_tree });
          }
        } catch (err) {}
      };
}

/**
  export const setCurrentQuestionId = (currentQuestionId) => {
    return dispatch => {
      dispatch({ type: SET_CURRENT_QUESTION_ID, payload: currentQuestionId });
    }
  };
**/
