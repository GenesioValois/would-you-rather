import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Login from "../pages/login";

function PrivateRoute({ comp: Component, ...rest }) {
  const isSignedIn = useSelector(({ auth }) => auth.isSignedIn);
  return (
    <Route {...rest} render={(props) => (isSignedIn ? <Component {...props} /> : <Login />)} />
  );
}

export default PrivateRoute;
