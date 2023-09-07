import React from "react";
import { Link } from "react-router-dom";
import "../stylecomponents/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="headbuttons">
        <div id="buttons">
          <Link to="/">
            <b>Home</b>
          </Link>
          <Link to="/aboutpage">
            <b>About me</b>
          </Link>

          <Link to="/contactpage">
            <b>Contact me</b>
          </Link>
        </div>
        <div id="hireme">
          <Link to="/hireme">
            <button>
              <b>Hire me</b>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
