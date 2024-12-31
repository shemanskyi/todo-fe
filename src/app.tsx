import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "config/appRoutes";

import "./app.scss";
export default function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
      <ToastContainer />
    </>
  );
}
