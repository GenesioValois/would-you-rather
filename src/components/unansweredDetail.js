import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { addAnswer } from "../store/actions/question";

const useStyles = makeStyles({
  formControl: { marginBottom: 18, marginTop: 18 },
  button: { marginTop: 18 },
});

const UnansweredDetail = ({ question }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const { id, optionOne, optionTwo } = question;
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setError("");
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answer = value;
    if (answer !== "") {
      dispatch(addAnswer(id, answer));
    } else {
      setError("You must make choose an answer");
    }
  };

  return (
    <>
      <Grid item container alignItems="center" justify="center">
        <FormControl component="fieldset" className={classes.formControl}>
          <Grid item container alignItems="center" justify="center" xs={12}>
            {error && <Typography color="secondary">{error}</Typography>}
          </Grid>
          <RadioGroup aria-label="answer" name="answer" value={value} onChange={handleChange}>
            <FormControlLabel value="optionOne" control={<Radio />} label={optionOne.text} />
            <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwo.text} />
          </RadioGroup>
          <Button size="small" color="primary" className={classes.button} onClick={handleSubmit}>
            Vote
          </Button>
        </FormControl>
      </Grid>
    </>
  );
};

export default UnansweredDetail;
