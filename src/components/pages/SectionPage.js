import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoadingSpinner from "../styled-components/LoadingSpinner";

const StartPage = React.lazy(() => import("./StartPage"));
const AddPassengerServicePage = React.lazy(() =>
  import("./AddPassengerServicePage")
);
const CheckInPage = React.lazy(() => import("./CheckinPage"));
const PassengersListPage = React.lazy(() => import("./PassengersListPage"));
const AdminServicePage = React.lazy(() => import("./AdminServicePage"));
const FlightDetailsPage = React.lazy(() => import("./FlightDetailsPage"));

const SectionPage = () => {
  const suspense = (
    <div className="section__loading">
      <LoadingSpinner />
      <h3>Loading...</h3>
    </div>
  );
  return (
    <React.Fragment>
      <Suspense fallback={suspense}>
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
          <Route path="*">
            <Redirect to="home" />
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default SectionPage;
