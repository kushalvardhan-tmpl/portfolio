import React from "react";

import "../stylecomponents/Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="headbuttons">
        <div id="buttons">
          <nav id="homebtn">
            <NavLink to="/">
              <b>Home</b>
            </NavLink>
          </nav>
          <nav id="aboutbtn">
            <NavLink to="/aboutpage">
              <b>About me</b>
            </NavLink>
          </nav>
          <nav id="contactbtn">
            <NavLink to="/contactpage">
              <b>Contact me</b>
            </NavLink>
          </nav>
        </div>

        <div id="hireme">
          <nav id="hirebtn">
            <NavLink to="/hireme">
              <button>
                <b>Hire me</b>
              </button>
            </NavLink>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;
