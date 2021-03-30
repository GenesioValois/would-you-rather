import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import AnsweredDetail from "../components/answeredDetail";
import UnansweredDetail from "../components/unansweredDetail";

const useStyles = makeStyles({
  root: { width: 400, margin: 18 },
  paper: { padding: 16 },
  container: {
    paddingBottom: 8,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  avatar: { marginRight: 12 },
  link: { color: "inherit", textDecoration: "inherit" },
});

const QuestionDetail = ({ match }) => {
  const id = match.params.id;
  const classes = useStyles();
  const { question, author, answered } = useSelector(({ auth: { user_id }, questions, users }) => {
    const question = questions[id];
    const answered = users[user_id].answers.hasOwnProperty(id);

    return { question: question, author: users[question.author], answered };
  });

  const date = new Date(question.timestamp);
  const formatedDate =
    [date.getMonth() + 1, date.getDate(), date.getFullYear()].join("/") +
    " " +
    [date.getHours(), date.getMinutes()].join(":");

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">Would you rather...</Typography>
      <Card className={classes.root} raised>
        <CardContent>
          <Grid
            item
            container
            alignItems="center"
            justify="flex-start"
            className={classes.container}
          >
            <Avatar alt={author.name} src={author.avatarURL} className={classes.avatar} />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {author.name} asks:
            </Typography>
          </Grid>
          <Divider />
          {answered ? (
            <AnsweredDetail question={question} />
          ) : (
            <UnansweredDetail question={question} />
          )}
          <Typography variant="caption" component="p">
            {formatedDate}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default QuestionDetail;
