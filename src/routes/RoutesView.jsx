import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesView;
