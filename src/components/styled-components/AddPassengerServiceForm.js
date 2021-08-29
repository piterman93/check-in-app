import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import { flightActions } from "../../store/flight-slice";

import Card from "../UI/Card";

import "../../index.scss";

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
    height: "28rem",
    boxShadow: "0 0 5px 0 black",
    margin: "2rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

const AddPassengerServiceForm = ({ option, passengerName }) => {
  const [specialSeat, setSpecialSeat] = useState("");
  const [specialMeal, setSpecialMeal] = useState("");
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  const flightData = useSelector((state) => state.flight);
  const flightDetails = flightData.filter((data) => data.number === option);

  const seatChangeHandler = (e) => {
    setSpecialSeat(e.target.value);
  };
  const mealChangeHandler = (e) => {
    setSpecialMeal(e.target.value);
  };

  const submitServiceHandler = (e) => {
    e.preventDefault();
    dispatch(
      flightActions.addSpecialService({
        passengerName,
        flightDetails,
        specialSeat,
        specialMeal,
      })
    );
    setSpecialSeat("");
    setSpecialMeal("");
    setShowSuccessNotification(true);
  };

  return (
    <Card className={classes.card}>
      <div className="aside__tittle">
        <h2>Add special service for a passenger : {passengerName}</h2>
      </div>
      {!showSuccessNotification && (
        <div className={classes.inputControl}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Special seat request
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={specialSeat}
              onChange={seatChangeHandler}
              label="Special seat request"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Passenger with infant"}>
                Passenger with infant
              </MenuItem>
              <MenuItem value={"Passenger with wheelchair"}>
                Passenger with wheelchair
              </MenuItem>
            </Select>
          </FormControl>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={submitServiceHandler}
          >
            <TextField
              id="outlined-basic"
              label="Special meal request"
              variant="outlined"
              value={specialMeal}
              onChange={mealChangeHandler}
            />
          </form>
          <div className="button__actions">
            <button className="submit" disabled={!specialMeal && !specialSeat}>
              Submit
            </button>
          </div>
        </div>
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

export default AddPassengerServiceForm;
