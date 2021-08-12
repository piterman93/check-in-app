import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    width: 1200,
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

export default function PassengerList({ option }) {
  const classes = useStyles();

  const flightData = useSelector((state) => state.flight);

  const passengersData = flightData.filter((data) => data.number === option);
  const newPassengersData = passengersData[0].passengers;
  // console.log(newPassengersData);

  function createData(name, birthday, passport, seat, INF, WCH) {
    return { name, birthday, passport, seat, INF, WCH };
  }

  const rows1 = newPassengersData.map((row) =>
    createData(
      row.name,
      row.birthday,
      row.passport,
      row.seat ? row.seat : "-",
      row.specServ.INF ? <span className={classes.span}>YES</span> : "-",
      row.specServ.WCH ? <span className={classes.span}>YES</span> : "-"
    )
  );

  return (
    <TableContainer component={Paper} className={classes.table__container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title} align="center">
              Passenger:
            </TableCell>
            <TableCell className={classes.title} align="center">
              Date of birth
            </TableCell>
            <TableCell className={classes.title} align="center">
              Passport number
            </TableCell>
            <TableCell className={classes.title} align="center">
              Seat number
            </TableCell>
            <TableCell className={classes.title} align="center">
              Infants
            </TableCell>
            <TableCell className={classes.title} align="center">
              Wheelchair
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell className={classes.a} align="center">
                {row.birthday}
              </TableCell>
              <TableCell align="center">{row.passport}</TableCell>
              <TableCell align="center">{row.seat}</TableCell>
              <TableCell align="center">{row.INF}</TableCell>
              <TableCell align="center">{row.WCH}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
