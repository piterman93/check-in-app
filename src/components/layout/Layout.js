import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { flightActions } from "../../store/flight-slice";

import "../../styles/Layout.scss";

import SectionPage from "../pages/SectionPage";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  //function for sending data

  // const flightData = FlightData;

  // useEffect(() => {
  //   const sendFlightData = async () => {
  //     const response = await fetch(
  //       "https://check-inn-app-default-rtdb.firebaseio.com/flightData.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(flightData),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (response) {
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   };
  //   sendFlightData();
  // }, [flightData]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getFlightData = async () => {
      dispatch(flightActions.toggleLoading());
      const response = await fetch(
        "https://check-inn-app-default-rtdb.firebaseio.com/flightData.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const data = await response.json();

      let transformedData;
      for (let key in data) {
        transformedData = data[key];
      }
      return transformedData;
    };

    getFlightData()
      .then((data) => {
        dispatch(flightActions.getFlightData(data));
        dispatch(flightActions.toggleLoading());
        console.log(data);
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
