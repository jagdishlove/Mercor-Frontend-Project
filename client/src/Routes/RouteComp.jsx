import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function RouteComp() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default RouteComp;
