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
  const newFlight = { ...selectedFlight, newPassengers };

  state = { ...state, newFlight };
};

const addService = (state, action) => {
  const clickedPassenger = action.payload.passengerName;
  const flightNumber = action.payload.flightDetails;
  const specialSeat = action.payload.specialSeat
    ? action.payload.specialSeat
    : "";
  const specialMeal = action.payload.specialMeal
    ? action.payload.specialMeal
    : "";

  const newState = [...state];

  const selectedFlight = newState.find(
    (flight) => flight.number.toString() === flightNumber[0].number.toString()
  );

  let selectedPassenger = selectedFlight.passengers.find(
    (passenger) =>
      passenger.name.toUpperCase() === clickedPassenger.toUpperCase()
  );

  if (specialSeat) {
    if (specialSeat === "Passenger with infant") {
      selectedPassenger.specServ.INF = true;
    } else if (specialSeat === "Passenger with wheelchair") {
      selectedPassenger.specServ.WCH = true;
    }
  }

  if (specialMeal) {
    selectedPassenger.specMeal = { SPEC: specialMeal.toString() };
  }

  const newPassengers = { ...selectedFlight.passengers, selectedPassenger };
  const newFlight = { ...selectedFlight, newPassengers };
  state = { ...state, newFlight };
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
    addSpecialService(state, action) {
      addService(state, action);
    },
  },
});

export const flightActions = flightSlice.actions;

export default flightSlice;
