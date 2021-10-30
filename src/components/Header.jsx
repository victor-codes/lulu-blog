import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Menu } from ".././assets/menu.svg";

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
  return (
    <header>
      <div className="header_container">
        <div>
          <h1 className="logo" onClick={theme}>
            LN
          </h1>
          <nav className="menu-items hide">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/design">Design</NavLink>
            <NavLink to="/dev">{`Dev </> `}</NavLink>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/sponsor">Sponsor</NavLink>
          </nav>
          <Menu />
        </div>
        <hr className="hidden" />
      </div>
    </header>
  );
};

export default Header;
