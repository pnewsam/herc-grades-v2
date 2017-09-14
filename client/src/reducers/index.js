import { combineReducers } from "redux";
import { sessionReducer } from "./sessionReducers";
import { apiReducer } from "./apiReducers";

const reducers = combineReducers({
  session: sessionReducer,
  api: apiReducer
});

export default reducers;