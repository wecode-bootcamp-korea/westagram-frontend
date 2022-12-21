import React from "react";
import { Link } from "react-router-dom";
import Find from "../Search/Find";

import "./Nav.scss";
export default function Nav() {
    return (
        <nav>
            <div className="nav-left">
                <i className="fa-brands fa-instagram"></i>
                <p className="nav-left-bar"></p>
                <p>
                    <Link to="/login" className="instagram">
                        Instagram
                    </Link>
                </p>
            </div>
            {/* <Search className="nav-center"></Search> */}
            <Find className="nav-center" />
            <div className="nav-right">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-user"></i>
            </div>
        </nav>
    );
}
