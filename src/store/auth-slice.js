import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  isAdmin: false,
  isOnSite: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLogged = true;
      state.isOnSite = true;
      localStorage.setItem("logged", state.isOnSite);
    },
    adminLogin(state) {
      state.isLogged = true;
      state.isAdmin = true;
      state.isOnSite = true;
      localStorage.setItem("logged", state.isOnSite);
    },
    logout(state) {
      state.isLogged = false;
      state.isAdmin = false;
      state.isOnSite = false;
    },
    setLocalStorage(state) {
      const login = localStorage.getItem("logged");
      state.isOnSite = login;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
