import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
    width: "75%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "2rem",
    height: "2rem",
    minWidth: "1rem",
    lineHeight: "1rem",
  },
}));

let number = 1;

export default function PlaneGridd({ flightDetails }) {
  const classes = useStyles();

  const seatsNb = flightDetails[0].seatsNb;

  const grid = seatsNb.map((seat, i) => {
    number = i + 1;
    return (
      <Grid item xs={3} sm={3} md={1}>
        <Paper key={i} className={classes.paper}>
          {number}
        </Paper>
      </Grid>
    );
  });

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container>{grid} </Grid>
      </div>
    </React.Fragment>
  );
}
