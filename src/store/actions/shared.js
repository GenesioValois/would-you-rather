import { showLoading, hideLoading } from "react-redux-loading-bar";

import { getInitialData } from "../../api";
import { setUsers } from "./user";

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({ users }) => {
    dispatch(setUsers(users));
    dispatch(hideLoading());
  });
};
