import API from "../apis/user-api";
import {Types} from "../constants/user-types" 
export function authenticate_USER(params) {
  return async function (dispatch, getState) {
    try {
      let resp = await API.authenticate_user(params);
      
      console.log(resp);
    
      return resp;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function userlist_data() { return async function (dispatch, getState) {
  try {
    let resp = await API.user_list();
    dispatch({type :Types.USER_LIST, payload:resp})
      return resp 
      } catch (e) {
    return { "error": true };
  }
};
  }

