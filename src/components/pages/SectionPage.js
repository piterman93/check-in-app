import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import StartPage from "./StartPage";

const SectionPage = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="home" />
        </Route>
        <Route path="/home">
          <StartPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default SectionPage;
