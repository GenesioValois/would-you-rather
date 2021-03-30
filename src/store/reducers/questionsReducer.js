import { ADD_ANSWER, SET_QUESTIONS, ADD_QUESTION } from "../actions/question";

export default function questionsReducer(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER:
      const { question_id, answer, user_id } = action.answer;
      const votes = state[question_id][answer].votes.concat([user_id]);

      return {
        ...state,
        [question_id]: {
          ...state[question_id],
          [answer]: {
            ...state[question_id][answer],
            votes,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
