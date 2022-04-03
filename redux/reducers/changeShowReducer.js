import * as actionTypes from "../actions/actionTypes";
import initialState from "./InitialState";

export default function changeShowReducer(
  state = initialState.showMovie,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_DATA:
      return action.payload;
    default:
      return state;
  }
}
