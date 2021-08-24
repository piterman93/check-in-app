import { createSlice } from "@reduxjs/toolkit";

import { FlightData } from "../flightData";

const initialState = FlightData;

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    passengerCheckIn(state, action) {
      const clickedPassenger = action.payload.passengerName;
      const seatNumber = action.payload.checkInID;
      const flightNumber = action.payload.flightDetails;

      const newState = [...state];

      const selectedFlight = newState.find(
        (flight) =>
          flight.number.toString() === flightNumber[0].number.toString()
      );

      const selectedPassenger = selectedFlight.passengers.find(
        (passenger) =>
          passenger.name.toUpperCase() === clickedPassenger.toUpperCase()
      );
      selectedPassenger.seat = seatNumber.toString();

      const newPassengers = { ...selectedFlight.passengers, selectedPassenger };
      const newFLight = { ...selectedFlight, newPassengers };

      state = { ...state, newFLight };
    },
    undoCheckIn(state, action) {
      const clickedPassenger = action.payload.passengerName;
      const flightNumber = action.payload.flightDetails;

      const newState = [...state];

      const selectedFlight = newState.find(
        (flight) =>
          flight.number.toString() === flightNumber[0].number.toString()
      );

      const selectedPassenger = selectedFlight.passengers.find(
        (passenger) =>
          passenger.name.toUpperCase() === clickedPassenger.toUpperCase()
      );
      selectedPassenger.seat = "";

      const newPassengers = { ...selectedFlight.passengers, selectedPassenger };
      const newFLight = { ...selectedFlight, newPassengers };

      state = { ...state, newFLight };
    },
  },
});

export const flightActions = flightSlice.actions;

export default flightSlice;
