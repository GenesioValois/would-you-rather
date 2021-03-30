import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "./store/actions/shared";
import Home from "./pages/home";
import Login from "./pages/login";
import QuestionDetail from "./pages/questionDetail";
import LoadingBar from "./components/LoadingBar";
import Layout from "./components/Layout";
import history from "./utils/browserHistory";
import PrivateRoute from "./components/PrivateRoute";
import AddQuestion from "./pages/addQuestion";
import Leaderboard from "./pages/leaderboard";

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
          <PrivateRoute path="/home" exact comp={Home} />
          <PrivateRoute path="/question/:id" exact comp={QuestionDetail} />
          <PrivateRoute path="/add" exact comp={AddQuestion} />
          <PrivateRoute path="/leaderboard" exact comp={Leaderboard} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
