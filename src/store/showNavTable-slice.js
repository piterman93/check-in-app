import { createSlice } from "@reduxjs/toolkit";

const initialState = { showTable: true };

const showNavTableSlice = createSlice({
  name: "showNavTable",
  initialState,
  reducers: {
    showTable(state) {
      state.showTable = true;
    },
    hideTable(state) {
      state.showTable = false;
    },
  },
});

export const showNavTableActions = showNavTableSlice.actions;

export default showNavTableSlice;
