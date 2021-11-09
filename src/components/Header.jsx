import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Menu } from ".././assets/menu.svg";
import MobileNav from "./MobileNav";
import { ReactComponent as Close } from "../assets/close.svg";
import { motion } from "framer-motion";
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
      <motion.header
        initial={{ y: -101 }}
        animate={{ y: 0 }}
        exit={{ y: -101 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="header_container">
          <div>
            <div className="mode">
              <h1 className="logo" onClick={theme}>
                LN
              </h1>
              {mode === "light" ? (
                <button onClick={theme}>
                  <Moon className="mode_show" />
                </button>
              ) : (
                <button>
                  <Sun onClick={theme} className="mode_show" />
                </button>
              )}
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
            {mobileNav && <Close onClick={handleClick} />}
            {!mobileNav && <Menu onClick={handleClick} />}
          </div>
          <hr className="hidden" />
        </div>
      </motion.header>
      <MobileNav key="overlay" hide={(e) => setMobileNav(e)} show={mobileNav} />
    </>
  );
};

export default Header;
