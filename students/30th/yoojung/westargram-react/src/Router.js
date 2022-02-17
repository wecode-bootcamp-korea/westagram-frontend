import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Nav from "./pages/Main/Nav/Nav";
// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;