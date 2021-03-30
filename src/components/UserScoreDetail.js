import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: 16,
  },
  chip: { marginLeft: 12 },
  divider: { marginTop: 12, marginBottom: 12 },
  avatar: { marginRight: 12 },
  badge: { marginLeft: 12 },
  container: { padding: 16 },
});

const UserScoreDetail = ({ id }) => {
  const classes = useStyles();
  const { name, avatarURL, questions, answers } = useSelector(({ users }) => users[id]);
  const answered = Object.keys(answers).length;
  const created = Object.keys(questions).length;

  return (
    <Card className={classes.root} raised>
      <CardContent>
        <Grid item container alignItems="center" justify="flex-start">
          <Avatar alt={name} src={avatarURL} className={classes.avatar} />
          <Typography color="textSecondary">{name}</Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Box p={2}>
          <Typography variant="body1">
            Answered Questions:
            <Badge badgeContent={answered} color="primary" className={classes.badge} />
          </Typography>
          <Typography variant="body1">
            Created Questions:
            <Badge badgeContent={created} color="primary" className={classes.badge} />
          </Typography>
        </Box>
        <Divider className={classes.divider} />
        <Typography variant="body1">
          Total Score:
          <Badge badgeContent={answered + created} color="primary" className={classes.badge} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserScoreDetail;
