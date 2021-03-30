import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";

export default combineReducers({
  loadingBar: loadingBarReducer,
  users: usersReducer,
  auth: authReducer,
  questions: questionsReducer,
});
