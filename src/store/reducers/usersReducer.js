import { SET_USERS } from "../actions/user";

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
