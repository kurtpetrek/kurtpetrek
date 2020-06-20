import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UnderConstructionPage from "./pages/UnderConstructionPage/UnderConstructionPage";
import LayoutMain from "./components/Layouts/LayoutMain";
import HomePage from "./pages/HomePage/HomePage";

const MainRoute = (props: any) => {
  const MatchedComponent = props.component;

  return (
    <Route exact={props.exact} path={props.path}>
      <LayoutMain>
        <MatchedComponent {...props} />
      </LayoutMain>
    </Route>
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <MainRoute exact path="/" component={UnderConstructionPage} />
        <MainRoute exact path="/foo" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
