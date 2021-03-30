import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import QuestionList from "../components/QuestionList";

const Home = () => {
  const { answeredIds, unansweredIds } = useSelector(({ auth: { user_id }, questions, users }) => {
    const answeredIds = Object.keys(questions)
      .filter((id) => users[user_id].answers.hasOwnProperty(id))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const unansweredIds = Object.keys(questions)
      .filter((id) => !users[user_id].answers.hasOwnProperty(id))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
      answeredIds,
      unansweredIds,
    };
  });

  return (
    <Grid container spacing={2}>
      <QuestionList ids={unansweredIds} />
      <QuestionList ids={answeredIds} />
    </Grid>
  );
};

export default Home;
