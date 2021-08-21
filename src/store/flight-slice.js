import { createSlice } from "@reduxjs/toolkit";

import { FlightData } from "../flightData";

const initialState = FlightData;

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    passengerCheckIn(state, action) {
      // const passenger = action.payload.passenger;
      // const seatNumber = action.payload.checkInID;
      // console.log(state);
      // const passengerToUpdateID = state.passengers.findIndex(
      //   (pass) => pass.name === passenger
      // );
      // console.log(passengerToUpdateID);
      // passengerToUpdateID.seat = state.passengers.seat = seatNumber;
    },
    undoCheckIn(state) {
      // state.passengers.seat = "";
    },
  },
});

export const flightActions = flightSlice.actions;

export default flightSlice;
