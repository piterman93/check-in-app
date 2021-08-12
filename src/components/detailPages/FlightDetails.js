import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import PlaneGrid from "./PlaneGrid";

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    width: 750,
  },
  table__container: {
    position: "absolute",
    left: "2%",
    top: "2%",
    width: "96%",
    minWidth: "20vw",
    height: "96%",
    minHeight: "10%",
    boxShadow: "0 0 5px 0 black",
    padding: "2rem",
  },
  title: {
    fontWeight: "bold",
  },
  span: {
    color: "red",
    fontWeight: "bold",
  },
});

export default function FlightDetails({ option }) {
  const classes = useStyles();

  const flightData = useSelector((state) => state.flight);

  const flightDetails = flightData.filter((data) => data.number === option);

  function createData(number, plane, DEP, ARR, DEP_time, ARR_time) {
    return { number, plane, DEP, ARR, DEP_time, ARR_time };
  }

  const rows1 = flightDetails.map((row) =>
    createData(
      row.number,
      row.data.plane,
      row.data.DEP,
      row.data.ARR,
      row.data.DEP_time,
      row.data.ARR_time
    )
  );

  return (
    <TableContainer component={Paper} className={classes.table__container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title} align="center">
              Flight Number
            </TableCell>
            <TableCell className={classes.title} align="center">
              Plane
            </TableCell>
            <TableCell className={classes.title} align="center">
              Departure
            </TableCell>
            <TableCell className={classes.title} align="center">
              Arrival
            </TableCell>
            <TableCell className={classes.title} align="center">
              Departure time
            </TableCell>
            <TableCell className={classes.title} align="center">
              Arrival time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row" align="center">
                {row.number}
              </TableCell>
              <TableCell className={classes.a} align="center">
                {row.plane}
              </TableCell>
              <TableCell align="center">{row.DEP}</TableCell>
              <TableCell align="center">{row.ARR}</TableCell>
              <TableCell align="center">{row.DEP_time}</TableCell>
              <TableCell align="center">{row.ARR_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PlaneGrid flightDetails={flightDetails} />
    </TableContainer>
  );
}