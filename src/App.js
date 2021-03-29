import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "./store/actions/shared";
import Home from "./pages/home";
import Login from "./pages/login";
import LoadingBar from "./components/LoadingBar";
import Layout from "./components/Layout";
import history from "./utils/browserHistory";

function App() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(({ auth }) => auth.isSignedIn);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Router history={history}>
      <Layout>
        <LoadingBar />
        <Switch>
          <Route path="/" exact component={isSignedIn ? Home : Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
