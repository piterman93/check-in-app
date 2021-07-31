import React from "react";

import "../../styles/Layout.scss";

import SectionPage from "../pages/SectionPage";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <aside>
          <Navigation />
        </aside>
        <section className="page">
          <SectionPage />
        </section>
      </main>
    </div>
  );
};

export default Layout;
