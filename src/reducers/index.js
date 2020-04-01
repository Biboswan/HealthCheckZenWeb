import { combineReducers } from "redux";
import accountReducer from "./account_reducer";
import questionsReducer from "./questions_reducer";
import answersReducer from "./answers_reducer";

const allreducers = combineReducers({
  accountReducer,
  questionsReducer,
  answersReducer
});

export default allreducers;
