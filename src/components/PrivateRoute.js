import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Login from "../pages/login";

// the implementation of this compoenent is based at:
// https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146
const PrivateRoute = ({ comp: Component, ...rest }) => {
  const isSignedIn = useSelector(({ auth }) => auth.isSignedIn);
  return (
    <Route {...rest} render={(props) => (isSignedIn ? <Component {...props} /> : <Login />)} />
  );
};

export default PrivateRoute;
