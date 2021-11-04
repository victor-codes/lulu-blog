import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Menu } from ".././assets/menu.svg";
import MobileNav from "./MobileNav";
import { ReactComponent as Close } from "../assets/close.svg";
import { AnimatePresence } from "framer-motion";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";

const Header = () => {
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
              <h1 className="logo" onClick={theme}>
                LN
              </h1>
              {mode === "light" ? (
                <button onClick={theme} >
                  <Moon className="mode_show"/>
                </button>
              ) : (
                <button>
                  <Sun onClick={theme}  className="mode_show"/>
                </button>
              )}
            </div>
            <nav className="menu-items hide">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/design">Design</NavLink>
              <NavLink to="/dev">{`Dev </> `}</NavLink>
              <NavLink to="/cloud">Cloud/DevOps</NavLink>
              <NavLink to="/writing">Writing</NavLink>
              <NavLink to="/resources">Resources</NavLink>
              <NavLink to="/sponsor">Sponsor</NavLink>
            </nav>
            {mobileNav && <Close onClick={handleClick} />}
            {!mobileNav && <Menu onClick={handleClick} />}
          </div>
          <hr className="hidden" />
        </div>
      </header>
      <AnimatePresence exitBeforeEnter>
        <MobileNav
          key="overlay"
          hide={(e) => setMobileNav(e)}
          show={mobileNav}
        />
      </AnimatePresence>
    </>
  );
};

export default Header;
