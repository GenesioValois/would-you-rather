import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserScoreDetail from "../components/UserScoreDetail";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const Leaderboard = () => {
  const userIds = useSelector(({ users }) =>
    Object.keys(users).sort((idA, idB) => {
      const scoreA = Object.keys(users[idA].answers).length + users[idA].questions.length;
      const scoreB = Object.keys(users[idB].answers).length + users[idB].questions.length;
      return scoreB - scoreA;
    })
  );
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Leaderboard</Typography>
        {userIds.map((id) => (
          <UserScoreDetail key={id} id={id} />
        ))}
      </Paper>
    </Grid>
  );
};

export default Leaderboard;
