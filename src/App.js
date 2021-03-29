import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
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
    <Container fixed>
      <LoadingBar />
      <Router>
        <Switch>
          <Route path="/" exact component={isSignedIn ? Home : Login} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
