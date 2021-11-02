import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import PassengerListTable from "./PassengerListTable";
import PassengerFilterForm from "../styled-components/PassengerFilterForm";

const useStyles = makeStyles({
  table__container: {
    position: "absolute",
    left: "2%",
    top: "2%",
    width: "96%",
    minWidth: "20vw",
    height: "96%",
    minHeight: "10%",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
    padding: "2rem",
  },
  control: {
    display: "flex;",
  },
});

export default function PassengerList({ option }) {
  const [filteredTableDataPassengers, setFilteredTableDataPassengers] =
    useState(null);

  const classes = useStyles();

  const flightData = useSelector((state) => state.flight.flights);
  const passengersData = flightData.filter((data) => data.number === option);
  const newPassengersData = passengersData[0].passengers;

  const clearFilterHandler = () => {
    setFilteredTableDataPassengers(null);
  };

  const filterTablePassengers = (data) => {
    const passengersCheckedIn = newPassengersData.filter(
      (pass) => pass.seat && data.checkedIn
    );
    const passengersMissPassport = newPassengersData.filter(
      (pass) => !pass.passport && data.missPassport
    );
    const passengersMissDOB = newPassengersData.filter(
      (pass) => !pass.birthday && data.missDOB
    );
    const passengersWithInfant = newPassengersData.filter(
      (pass) => pass.specServ.INF && data.infants
    );
    const passengersWithWheelchair = newPassengersData.filter(
      (pass) => pass.specServ.WCH && data.wheelchair
    );
    const passengersWithSpecialMeal = newPassengersData.filter(
      (pass) =>
        pass.specMeal.SPEC && pass.specMeal.SPEC !== "-" && data.specialMeal
    );

    const filteredData = [
      ...passengersCheckedIn,
      ...passengersMissPassport,
      ...passengersMissDOB,
      ...passengersWithInfant,
      ...passengersWithWheelchair,
      ...passengersWithSpecialMeal,
    ];

    const removeDuplicates = (data, key) => {
      return [...new Map(data.map((x) => [key(x), x])).values()];
    };

    const dataWithoutDuplicates = removeDuplicates(
      filteredData,
      (item) => item.name
    );

    setFilteredTableDataPassengers(dataWithoutDuplicates);
  };

  return (
    <TableContainer component={Paper} className={classes.table__container}>
      <div className="aside__tittle">
        <h2>Passengers list for a flight number: {option}</h2>
      </div>
      <div className={classes.control}>
        <PassengerListTable
          newPassengersData={newPassengersData}
          filteredTableDataPassengers={filteredTableDataPassengers}
          option={option}
        />
        <PassengerFilterForm
          onFilter={filterTablePassengers}
          onClear={clearFilterHandler}
        />
      </div>
    </TableContainer>
  );
}
