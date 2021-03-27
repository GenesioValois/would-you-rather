import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import authReducer from "./authReducer";

export default combineReducers({
  loadingBar: loadingBarReducer,
  auth: authReducer,
});
