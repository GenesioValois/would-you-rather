import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ comp: Component, ...rest }) {
  const isSignedIn = useSelector(({ auth }) => auth.isSignedIn);
  return (
    <Route
      {...rest}
      render={(props) => (isSignedIn ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
