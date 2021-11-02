import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import "../../index.scss";

import TextField from "@material-ui/core/TextField";
import Card from "../UI/Card";

import { flightActions } from "../../store/flight-slice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 300,
  },
  inputControl: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    maxWidth: 700,
    minWidth: 400,
    height: "30rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300,
      display: "flex",
      flexDirection: "column",
    },
  },
}));

const AdminPanel = ({ option, passengerName }) => {
  const [passName, setPassName] = useState("");
  const [passDOB, setPassDOB] = useState("");
  const [passPassport, setPassPassport] = useState("");
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  const flightData = useSelector((state) => state.flight.flights);
  const flightDetails = flightData.filter((data) => data.number === option);

  const nameChangeHandler = (e) => {
    setPassName(e.target.value);
  };
  const DOBChangeHandler = (e) => {
    setPassDOB(e.target.value);
  };
  const passportChangeHandler = (e) => {
    setPassPassport(e.target.value);
  };

  const submitChangesHandler = (e) => {
    e.preventDefault();
    dispatch(
      flightActions.adminModification({
        passengerName,
        passName,
        passDOB,
        passPassport,
        flightDetails,
      })
    );
    setPassName("");
    setPassDOB("");
    setPassPassport("");
    setShowSuccessNotification(true);
  };

  return (
    <Card className={classes.card}>
      <div className="aside__tittle">
        <h2>Admin modifications for a passenger : {passengerName}</h2>
      </div>
      {!showSuccessNotification && (
        <form
          noValidate
          autoComplete="off"
          onSubmit={submitChangesHandler}
          data-testid="form"
        >
          <div className={classes.inputControl}>
            <TextField
              className={classes.root}
              data-testid="outlined-basic"
              id="outlined-basic"
              label="Change passenger name"
              variant="outlined"
              value={passName}
              onChange={nameChangeHandler}
            />
            <TextField
              className={classes.root}
              data-testid="outlined-basic"
              id="outlined-basic"
              label="Change passenger date of birth"
              variant="outlined"
              value={passDOB}
              onChange={DOBChangeHandler}
            />
            <TextField
              className={classes.root}
              data-testid="outlined-basic"
              id="outlined-basic"
              label="Change passenger passport number"
              variant="outlined"
              value={passPassport}
              onChange={passportChangeHandler}
            />

            <div className="button__actions">
              <button
                className="submit"
                disabled={!passName && !passDOB && !passPassport}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
      {showSuccessNotification && (
        <div className={classes.inputControl}>
          <h3> Services updated successfully! </h3>
          <p style={{ marginTop: "2rem" }}>
            {" "}
            You can check modifications on Passengers List Page
          </p>
        </div>
      )}
    </Card>
  );
};

export default AdminPanel;
