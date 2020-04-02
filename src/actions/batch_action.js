import { GO_TO_NEXT_Q, SET_CURRENT_QUESTION_ID } from "../constants";

export const goToNextQuestion = ({ qid, nextQid, answer }) => {
    return dispatch => {
        if (answer) {
            dispatch({ type: GO_TO_NEXT_Q, payload: { qid, nextQid, answer } })
        } else {
            dispatch({ type: SET_CURRENT_QUESTION_ID, payload: nextQid });
        }
    }
};
