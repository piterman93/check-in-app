import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import flightSlice from "./flight-slice";
import showNavTableSlice from "./showNavTable-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    flight: flightSlice.reducer,
    showNavTable: showNavTableSlice.reducer,
  },
});

export default store;
