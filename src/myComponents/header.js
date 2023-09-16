import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../stylecomponents/Header.css";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="header">
      <div id="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={menuVisible ? "menu visible" : "menu hidden"}>
        <nav className="headbuttons">
          <div id="buttons">
            <nav id="homebtn">
              <NavLink to="/">
                <b>Home</b>
              </NavLink>
            </nav>
            <nav id="contactbtn">
              <NavLink to="/contactpage">
                <b>Contact me</b>
              </NavLink>
            </nav>
            <nav id="blogs-btn">
              <NavLink to="/blogs">
                <b>Blogs</b>
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
    </div>
  );
};

export default Header;
