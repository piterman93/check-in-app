import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    height: 100,
  },
  title: {
    fontWeight: "bold",
  },
  span: {
    color: "red",
    fontWeight: "bold",
  },
});

export default function PassengerListTable({
  newPassengersData,
  filteredTableDataPassengers,
}) {
  const classes = useStyles();

  function createData(name, birthday, passport, seat, INF, WCH, SPEC) {
    return { name, birthday, passport, seat, INF, WCH, SPEC };
  }

  const tableData = filteredTableDataPassengers
    ? filteredTableDataPassengers
    : newPassengersData;

  const rows1 = tableData.map((row) =>
    createData(
      row.name,
      row.birthday ? row.birthday : "-",
      row.passport ? row.passport : "-",
      row.seat ? row.seat : "-",
      row.specServ.INF ? <span className={classes.span}>YES</span> : "-",
      row.specServ.WCH ? <span className={classes.span}>YES</span> : "-",
      row.specMeal.SPEC && row.specMeal.SPEC !== "-" ? (
        <span className={classes.span}>{row.specMeal.SPEC}</span>
      ) : (
        "-"
      )
    )
  );

  return (
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
          <TableCell className={classes.title} align="center">
            Special Meal
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows1.map((row) => (
          <TableRow key={row.name} className={classes.row}>
            <TableCell component="th" scope="row" align="center">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.birthday}</TableCell>
            <TableCell align="center">{row.passport}</TableCell>
            <TableCell align="center">{row.seat}</TableCell>
            <TableCell align="center">{row.INF}</TableCell>
            <TableCell align="center">{row.WCH}</TableCell>
            <TableCell align="center">{row.SPEC}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
