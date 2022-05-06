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
              <NavLink to="/" className="logo">
                LN
              </NavLink>
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
              <NavLink to="/devops">Cloud/DevOps</NavLink>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://lulunwenyi.notion.site/resources-221edef5d08c4018a4259eba72a7407d"
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

      <MobileNav key="overlay" hide={(e) => setMobileNav(e)} show={mobileNav} />
    </>
  );
};

export default Header;
