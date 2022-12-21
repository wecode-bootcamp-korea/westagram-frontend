import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
