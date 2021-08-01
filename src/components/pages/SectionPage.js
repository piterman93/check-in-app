import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import StartPage from "./StartPage";
import CheckInPage from "./CheckInPage";
import AddPassengerServicePage from "./AddPassengerServicePage";
import AdminServicePage from "./AdminServicePage";
import PassengersListPage from "./PassengersListPage";
import FlightDetailsPage from "./FlightDetailsPage";

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
        <Route path="/check-in">
          <CheckInPage />
        </Route>
        <Route path="/flight-details">
          <FlightDetailsPage />
        </Route>
        <Route path="/passengers-list">
          <PassengersListPage />
        </Route>
        <Route path="/add-passenger-service">
          <AddPassengerServicePage />
        </Route>
        <Route path="/admin-changes">
          <AdminServicePage />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default SectionPage;
