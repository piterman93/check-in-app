import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "../../styles/Layout.scss";

import SectionPage from "../pages/SectionPage";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

import { flightActions } from "../../store/flight-slice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getFlightData = async () => {
      dispatch(flightActions.toggleLoading());
      const response = await fetch(
        "https://raw.githubusercontent.com/piterman93/check-in-app/master/FlightData.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const data = await response.json();
      return data;
    };

    getFlightData()
      .then((data) => {
        if (data) {
          dispatch(flightActions.getFlightData(data));
          dispatch(flightActions.toggleLoading());
        }
      })
      .catch((error) => alert(error.message));
  }, [dispatch]);

  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <aside>
          <Navigation />
        </aside>
        <section className="page">
          <SectionPage />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
