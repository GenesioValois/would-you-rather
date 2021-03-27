import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { handleInitialData } from "./store/actions/shared";
import Home from "./pages/home";
import Login from "./pages/login";
import LoadingBar from "./components/LoadingBar";

function App() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(({ auth }) => auth.isSignedIn);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <>
      <LoadingBar />
      <Router>
        <Switch>
          <Route path="/" exact component={isSignedIn ? Home : Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
