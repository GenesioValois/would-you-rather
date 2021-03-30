import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Question from "./Question";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const QuestionList = ({ ids }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Unanswered questions</Typography>
        {ids.map((id) => (
          <Question key={id} id={id} />
        ))}
      </Paper>
    </Grid>
  );
};

export default QuestionList;
