import { GO_TO_NEXT_Q, SET_CURRENT_QUESTION_ID } from "../constants";

export const goToNextQuestion = ({ qid, nextQid, answer, weight }) => {
    return dispatch => {
        if (answer) {
            //console.log('ff2', weight);
            dispatch({ type: GO_TO_NEXT_Q, payload: { qid, nextQid, answer, weight } })
        } else {
            dispatch({ type: SET_CURRENT_QUESTION_ID, payload: nextQid });
        }
    }
};
