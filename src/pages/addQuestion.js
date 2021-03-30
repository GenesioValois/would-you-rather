import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { addQuestion } from "../store/actions/question";

const useStyles = makeStyles({
  root: { width: 400, margin: 16 },
  paper: { padding: 16 },
  or: { marginTop: 16, marginBottom: 16 },
});

const AddQuestion = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [question, setQuestion] = useState({ optionOne: "", optionTwo: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuestion(question));
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">Would you rather...</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Card className={classes.root} raised>
          <CardContent>
            <TextField
              name="optionOne"
              label="OptionOne"
              value={question.optionOne}
              onChange={handleChange}
              fullWidth
              required
            />
            <Typography variant="body2" component="p" className={classes.or}>
              or
            </Typography>
            <TextField
              name="optionTwo"
              label="OptionTwo"
              value={question.optionTwo}
              onChange={handleChange}
              fullWidth
              required
            />
          </CardContent>
          <CardActions>
            <Grid container justify="center" alignItems="center">
              <Button
                size="small"
                color="primary"
                className={classes.button}
                type="submit"
                disabled={question.optionOne === "" || question.optionTwo === ""}
              >
                Add
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </Paper>
  );
};

export default AddQuestion;
