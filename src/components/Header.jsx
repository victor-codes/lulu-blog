import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Menu } from ".././assets/menu.svg";
import MobileNav from "./MobileNav";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { SubCategoryContent } from "../context/Category";

const Header = () => {
  const { setSubName } = useContext(SubCategoryContent);

  const localTheme = localStorage.getItem("mode");

  const [mode, setMode] = useState(localTheme);

  useEffect(() => {
    if (mode === null) {
      setMode("light");
      return localStorage.setItem("mode", "light");
    } else document.body.setAttribute("data-theme", mode);
  }, [mode]);

  function theme() {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }
  const [mobileNav, setMobileNav] = useState(false);

  function handleClick() {
    setMobileNav(!mobileNav);
  }
  return (
    <>
      <header>
        <div className="header_container">
          <div>
            <div className="mode">
              <h1 className="logo">LN</h1>

              <button style={{ padding: "0 4px" }} onClick={theme}>
                {mode === "light" ? (
                  <Moon className="mode_show" />
                ) : (
                  <Sun className="mode_show" />
                )}
              </button>
            </div>
            <nav className="menu-items hide">
              <NavLink
                onClick={() => {
                  setSubName("All");
                }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  setSubName("All");
                }}
                to="/design"
              >
                Design
              </NavLink>
              <NavLink
                onClick={() => {
                  setSubName("All");
                }}
                to="/dev"
              >{`Dev </> `}</NavLink>
              <NavLink
                onClick={() => {
                  setSubName("All");
                }}
                to="/cloud"
              >
                Cloud/DevOps
              </NavLink>
              {/* <NavLink
                onClick={() => {
                  setSubName("All");
                }}
                to="/writing"
              >
                Writing
              </NavLink> */}
              <NavLink
                onClick={() => {
                  setSubName("All");
                }}
                to="/resources"
              >
                Resources
              </NavLink>
              <NavLink
                onClick={() => {
                  setSubName("All");
                }}
                to="/sponsor"
              >
                Sponsor
              </NavLink>
            </nav>
            {mobileNav && <Close className="menu_icon" onClick={handleClick} />}
            {!mobileNav && <Menu className="menu_icon" onClick={handleClick} />}
          </div>
          <hr className="hidden" />
        </div>
      </header>
      <MobileNav key="overlay" hide={(e) => setMobileNav(e)} show={mobileNav} />
    </>
  );
};

export default Header;
