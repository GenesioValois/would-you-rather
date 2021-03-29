import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { signIn } from "../store/actions/auth";

const useStyles = makeStyles({
  root: { height: "100vh" },
  card: { width: 400 },
  title: { fontSize: 16 },
  formControl: { margin: 8, width: "100%" },
});

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const users = useSelector(({ users }) => {
    const userIds = Object.keys(users);
    if (userIds.length === 0) {
      return [];
    }

    return userIds.map((id) => ({ id, name: users[id].name }));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user !== "") {
      dispatch(signIn(user));
    } else {
      setErrorMessage("You must choose a username");
    }
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Would you rather - login
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel id="user">User</InputLabel>
              <Select labelId="user" value={user} onChange={(e) => setUser(e.target.value)}>
                {users.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errorMessage}</FormHelperText>
            </FormControl>
          </CardContent>
          <CardActions>
            <Grid container justify="center" alignItems="center">
              <Button type="submit" size="small" variant="outlined" color="primary">
                Sign in
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </Grid>
  );
}

export default Login;
