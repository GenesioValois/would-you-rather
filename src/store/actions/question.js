import history from "../../utils/browserHistory";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestionAnswer, saveQuestion } from "../../api";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export const setQuestions = (questions) => ({ type: SET_QUESTIONS, questions });

export const addAnswer = (question_id, answer) => async (dispatch, getState) => {
  const { auth } = getState();
  dispatch(showLoading());
  await saveQuestionAnswer({
    qid: question_id,
    answer,
    authedUser: auth.user_id,
  });

  dispatch(addAnswerAction(question_id, answer, auth.user_id));
  dispatch(hideLoading());
};

export const addQuestion = ({ optionTwo, optionOne }) => async (dispatch, getState) => {
  const { auth } = getState();
  dispatch(showLoading());

  const question = await saveQuestion({
    optionOneText: optionOne,
    optionTwoText: optionTwo,
    author: auth.user_id,
  });
  dispatch(addQuestionAction(question));
  dispatch(hideLoading());
  history.push("/home");
};

// this action will be sent to question reducer and user reducer
const addAnswerAction = (question_id, answer, user_id) => {
  return {
    type: ADD_ANSWER,
    answer: {
      question_id,
      answer,
      user_id,
    },
  };
};

// this action will be sent to question reducer and user reducer
const addQuestionAction = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};
