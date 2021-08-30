import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/styled-components/LoadingSpinner";

const LoginPage = React.lazy(() => import("./components/pages/LoginPage"));

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isOnSite = useSelector((state) => state.auth.isOnSite);

  const suspense = (
    <div className="section__loading">
      <LoadingSpinner />
      <h3>Loading...</h3>
    </div>
  );

  return (
    <React.Fragment>
      <Suspense fallback={suspense}>
        {!isLogged && !isOnSite && <LoginPage />}
      </Suspense>
      {(isLogged || isOnSite) && <Layout />}
    </React.Fragment>
  );
}

export default App;
