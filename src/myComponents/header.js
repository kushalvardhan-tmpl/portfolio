import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../stylecomponents/Header.css";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 575) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div id="menu-toggle">
        <div onClick={toggleMenu}>
          <img src="/assets/menu.png" alt="buttons view" />
        </div>
        <div className="hire">
          {window.innerWidth <= 575 && (
            <div className="hireme-button">
              <NavLink to="/hireme">
                <button>
                  <b>Hire me</b>
                </button>
              </NavLink>
            </div>
          )}{" "}
        </div>
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
            {window.innerWidth >= 575 && (
              <nav id="hirebtn">
                <NavLink to="/hireme">
                  <button>
                    <b>Hire me</b>
                  </button>
                </NavLink>
              </nav>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
