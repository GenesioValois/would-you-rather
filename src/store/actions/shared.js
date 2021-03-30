import { showLoading, hideLoading } from "react-redux-loading-bar";

import { getInitialData } from "../../api";
import { setUsers } from "./user";
import { setQuestions } from "./question";

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({ users, questions }) => {
    dispatch(setUsers(users));
    dispatch(setQuestions(questions));
    dispatch(hideLoading());
  });
};
