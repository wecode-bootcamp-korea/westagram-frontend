import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Router />
  </>
);
