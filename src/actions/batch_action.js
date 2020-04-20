import { GO_TO_NEXT_Q, GO_TO_PREV_Q } from "../constants";

export const goToNextQuestion = ({ qid, nextQid, answer, weight }) => {
    return dispatch => {
        if (answer) {
            dispatch({ type: GO_TO_NEXT_Q, payload: { qid, nextQid, answer, weight } })
        } else {
            dispatch({ type: GO_TO_PREV_Q, payload: { qid, nextQid } });
        }
    }
};
