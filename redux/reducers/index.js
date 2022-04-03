import { combineReducers } from "redux";

import changeShowReducer from "./changeShowReducer";

const rootReducer = combineReducers({
  changeShowReducer,
});

export default rootReducer;
