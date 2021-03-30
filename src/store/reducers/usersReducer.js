import { SET_USERS } from "../actions/user";
import { ADD_ANSWER, ADD_QUESTION } from "../actions/question";

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER:
      const { question_id, answer, user_id } = action.answer;

      return {
        ...state,
        [user_id]: {
          ...state[user_id],
          answers: {
            ...state[user_id].answers,
            [question_id]: answer,
          },
        },
      };
    case ADD_QUESTION:
      const questions = state[action.question.author].questions.concat([action.question.id]);
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions,
        },
      };
    default:
      return state;
  }
}
