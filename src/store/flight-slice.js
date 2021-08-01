import { createSlice } from "@reduxjs/toolkit";

import { FlightData } from "../flightData";

const initialState = FlightData;

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
});

export const flightActions = flightSlice.actions;

export default flightSlice;
