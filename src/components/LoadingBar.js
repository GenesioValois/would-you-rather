import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
  loading: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
}));

const LoadingBar = () => {
  const classes = useStyles();
  const loadingBar = useSelector(({ loadingBar }) => loadingBar);

  return (
    <>{loadingBar && loadingBar.default === 1 && <LinearProgress className={classes.loading} />}</>
  );
};

export default LoadingBar;
