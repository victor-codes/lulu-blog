import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Menu } from ".././assets/menu.svg";
import MobileNav from "./MobileNav";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Header = () => {
  const { scrollY } = useViewportScroll();
  const color = useTransform(
    scrollY,
    [0, 0.4, 0.5],
    ["", "", "var(--primary-background-blur)"]
  );

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

  const match = window.matchMedia(`(max-width: 768px)`);
  return (
    <>
      <motion.header
        style={{
          backgroundColor: color,
        }}
      >
        <div className="header_container">
          <div>
            <div className="mode">
              <h1 className="logo">LN</h1>
              <button
                aria-label="Toggle Theme"
                style={{ padding: "0 4px" }}
                onClick={theme}
              >
                {mode === "light" ? (
                  <Moon className="mode_show" />
                ) : (
                  <Sun className="mode_show" />
                )}
              </button>
            </div>
            <nav className="menu-items hide">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/design">Design</NavLink>
              <NavLink to="/dev">{`Dev </> `}</NavLink>
              <NavLink to="/cloud">Cloud/DevOps</NavLink>
              {/* <NavLink
               
                to="/writing"
              >
                Writing
              </NavLink> */}
              <NavLink to="/resources">Resources</NavLink>
              <NavLink to="/sponsor">Sponsor</NavLink>
            </nav>
            {mobileNav && <Close className="menu_icon" onClick={handleClick} />}
            {!mobileNav && <Menu className="menu_icon" onClick={handleClick} />}
          </div>
          <hr className="hidden" />
        </div>
      </motion.header>
      {match && (
        <MobileNav
          key="overlay"
          hide={(e) => setMobileNav(e)}
          show={mobileNav}
        />
      )}
    </>
  );
};

export default Header;
