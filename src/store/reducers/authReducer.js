import { SIGN_IN, SIGN_OUT } from "../actions/auth";

const user_id = localStorage.getItem("user_id");
const initialState = user_id ? { isSignedIn: true, user_id } : {};
export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, user_id: action.id };
    case SIGN_OUT:
      return { isSignedIn: false, user_id: null };
    default:
      return state;
  }
}
