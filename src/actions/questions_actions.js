import { FETCHING_QUESTIONS, FETCH_QUESTIONS } from "../constants";
import { fetchQuestionsApi } from "../api/questions";

export const fetchQuestions = () => {
    return async (dispatch, getState) => {
        try {
            const { loginDetails } = getState().accountReducer;

            if (loginDetails && loginDetails.token) {
                const { token } = loginDetails;
                dispatch({ type: FETCHING_QUESTIONS });
                const { data } = await fetchQuestionsApi(token);
                console.log(data.preordered_tree);
                localStorage.setItem('user_details', JSON.stringify(data.user_details));
                dispatch({ type: FETCH_QUESTIONS, payload: data.preordered_tree });
          }
        } catch (err) {}
      };
}
