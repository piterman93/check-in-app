import { createSlice } from "@reduxjs/toolkit";

import { FlightData } from "../flightData";

const initialState = FlightData;

const checkInOrUndoCheckIn = (state, action) => {
  const clickedPassenger = action.payload.passengerName;
  const seatNumber = action.payload.checkInID ? action.payload.checkInID : "";
  const flightNumber = action.payload.flightDetails;

  const newState = [...state];

  const selectedFlight = newState.find(
    (flight) => flight.number.toString() === flightNumber[0].number.toString()
  );

  const selectedPassenger = selectedFlight.passengers.find(
    (passenger) =>
      passenger.name.toUpperCase() === clickedPassenger.toUpperCase()
  );
  selectedPassenger.seat = seatNumber.toString();

  const newPassengers = { ...selectedFlight.passengers, selectedPassenger };
  const newFLight = { ...selectedFlight, newPassengers };

  state = { ...state, newFLight };
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    passengerCheckIn(state, action) {
      checkInOrUndoCheckIn(state, action);
    },
    undoCheckIn(state, action) {
      checkInOrUndoCheckIn(state, action);
    },
  },
});

export const flightActions = flightSlice.actions;

export default flightSlice;
