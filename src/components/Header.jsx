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
      setMode("dark");
      return localStorage.setItem("mode", "dark");
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
              {/* <NavLink to="/resources">Resources</NavLink> */}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://lulunwenyi.notion.site/lulunwenyi/Lu-s-ResourceBank-019bbd1303664268bf2adab4b3b7c9f4"
              >
                Resources
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.buymeacoffee.com/lulunwenyi"
              >
                Sponsor
              </a>
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
