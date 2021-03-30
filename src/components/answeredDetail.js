import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  question: {
    marginBottom: 18,
    marginTop: 18,
  },
  chip: { marginLeft: 12 },
});

const AnsweredDetail = ({ question }) => {
  const classes = useStyles();
  const user_id = useSelector(({ auth: { user_id } }) => user_id);

  const { optionOne, optionTwo } = question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round((optionOne.votes.length / totalVotes) * 100);
  const optionTwoPercent = Math.round((optionTwo.votes.length / totalVotes) * 100);

  return (
    <>
      <Typography variant="h6" component="h2" className={classes.question}>
        {optionOne.text}
        {optionOne.votes.includes(user_id) ? (
          <Chip
            size="small"
            label="Your answer"
            color="primary"
            variant="outlined"
            className={classes.chip}
          />
        ) : null}
        <Typography variant="caption" component="p">
          chosen by {optionOne.votes.length}/{totalVotes}, {optionOnePercent}% of users
        </Typography>
      </Typography>
      <Typography variant="body2" component="p">
        or
      </Typography>
      <Typography variant="h6" component="h2" className={classes.question}>
        {optionTwo.text}
        {optionTwo.votes.includes(user_id) ? (
          <Chip
            size="small"
            label="Your answer"
            color="primary"
            variant="outlined"
            className={classes.chip}
          />
        ) : null}
        <Typography variant="caption" component="p">
          chosen by {optionTwo.votes.length}/{totalVotes}, {optionTwoPercent}% of users
        </Typography>
      </Typography>
    </>
  );
};

export default AnsweredDetail;
