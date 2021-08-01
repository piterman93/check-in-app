import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import flightSlice from "./flight-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, flight: flightSlice.reducer },
});

export default store;
