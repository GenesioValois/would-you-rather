import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../store/actions/auth";

const useStyles = makeStyles(() => ({
  user: {
    marginRight: 18,
  },
}));

const RightSection = () => {
  const user = useSelector(({ auth, users }) => users[auth.user_id]);
  const dispatch = useDispatch();
  const classes = useStyles();
  if (!user) {
    return null;
  }

  return (
    <Grid item container alignItems="center" justify="flex-end">
      <Typography className={classes.user}>{user.name}</Typography>
      <Avatar alt={user.name} src={user.avatarURL} />
      <IconButton color="inherit" onClick={() => dispatch(signOut())}>
        <ExitToAppIcon />
      </IconButton>
    </Grid>
  );
};

export default RightSection;
