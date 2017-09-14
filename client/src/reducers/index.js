import { combineReducers } from "redux";
import { sessionReducer } from "./sessionReducers";
import { apiReducer } from "./apiReducers";
import { flashReducer } from "./flashReducers";

const reducers = combineReducers({
  session: sessionReducer,
  api: apiReducer,
  flashMessages: flashReducer
});

export default reducers;