import React from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Menu } from ".././assets/menu.svg";

const Header = () => {
  return (
    <header>
      <div>
        <h1
          className="logo"
          onClick={() => {
            if (document.body.getAttribute("data-theme") === "light") {
              return document.body.setAttribute("data-theme", "dark");
            } else if (document.body.getAttribute("data-theme") === "dark") {
              return document.body.setAttribute("data-theme", "light");
            } else if (document.body.getAttribute("data-theme") === "") {
              return document.body.setAttribute("data-theme", "light");
            } else {
              return document.body.setAttribute("data-theme", "light");
            }
          }}
        >
          LN
        </h1>
        <nav className="menu-items hidden">
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
    </header>
  );
};

export default Header;
