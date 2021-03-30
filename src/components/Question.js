import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: 18,
  },
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
  question: {
    marginBottom: 18,
    marginTop: 18,
  },
  link: { color: "inherit", textDecoration: "inherit" },
});

const Question = ({ id }) => {
  const classes = useStyles();
  const { question, author } = useSelector(({ questions, users }) => {
    const question = questions[id];

    return { question: question, author: users[question.author] };
  });

  const date = new Date(question.timestamp);
  const formatedDate =
    [date.getMonth() + 1, date.getDate(), date.getFullYear()].join("/") +
    " " +
    [date.getHours(), date.getMinutes()].join(":");

  return (
    <Card className={classes.root} raised>
      <CardContent>
        <Grid item container alignItems="center" justify="flex-start" className={classes.container}>
          <Avatar alt={author.name} src={author.avatarURL} className={classes.avatar} />
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {author.name} asks:
          </Typography>
        </Grid>
        <Divider />
        <Typography variant="h6" component="h2" className={classes.question}>
          {question.optionOne.text.slice(0, 50)}...?
        </Typography>
        <Typography variant="caption" component="p">
          {formatedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid item container alignItems="center" justify="center">
          <Link to={`/question/${question.id}`} className={classes.link}>
            <Button size="small">View question</Button>
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Question;
