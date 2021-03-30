import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
  loading: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  topZero: { top: 0 },
  topHeader: { top: 64 },
}));

const LoadingBar = () => {
  const isSignedIn = useSelector(({ auth }) => auth.isSignedIn);
  const classes = useStyles();
  const loadingBar = useSelector(({ loadingBar }) => loadingBar);

  return (
    <>
      {loadingBar && loadingBar.default === 1 && (
        <LinearProgress
          className={clsx(classes.loading, {
            [classes.topHeader]: isSignedIn,
            [classes.topZero]: !isSignedIn,
          })}
        />
      )}
    </>
  );
};

export default LoadingBar;
