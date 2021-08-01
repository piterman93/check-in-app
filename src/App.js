import React from "react";

import { useSelector } from "react-redux";

import Layout from "./components/layout/Layout";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isOnSite = useSelector((state) => state.auth.isOnSite);
  return (
    <React.Fragment>
      {!isLogged && !isOnSite && <LoginPage />}
      {(isLogged || isOnSite) && <Layout />}
    </React.Fragment>
  );
}

export default App;
