import { combineReducers } from "redux";
import accountReducer from "./account_reducer";
import questionsReducer from "./questions_reducer";

const allreducers = combineReducers({
  accountReducer,
  questionsReducer
});

export default allreducers;
