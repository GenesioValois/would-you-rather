import { SIGN_IN, SIGN_OUT } from "../actions/auth";

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, user_id: action.id };
    case SIGN_OUT:
      return { isSignedIn: false, user_id: null };
    default:
      return state;
  }
}
