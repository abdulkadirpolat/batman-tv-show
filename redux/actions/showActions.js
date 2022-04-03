import * as actionTypes from "./actionTypes";

export function changeShowData(data) {
  return {
    type: actionTypes.CHANGE_SHOW_DATA,
    payload: data,
  };
}
