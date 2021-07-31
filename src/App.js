import React, { useState } from "react";

import Layout from "./components/layout/Layout";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <React.Fragment>
      {!isLogged && <LoginPage />}
      {isLogged && <Layout />}
    </React.Fragment>
  );
}

export default App;
