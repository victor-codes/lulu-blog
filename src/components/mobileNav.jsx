import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChrevonRight } from "../assets/chervon-right.svg";

const MobileNav = () => {
  return (
    <section className="mobile_nav">
      <div className="container">
        <NavLink activeClassName="active" to="/">
          All
        </NavLink>
        <NavLink activeClassName="active" to="category1">
          Category
        </NavLink>
        <NavLink activeClassName="active" to="category2">
          Category
        </NavLink>
        <NavLink activeClassName="active" to="category3">
          Category
        </NavLink>
        <NavLink activeClassName="active" to="category4">
          Category
        </NavLink>
        <NavLink activeClassName="active" to="category5">
          Category
        </NavLink>
        <NavLink activeClassName="active" to="category6">
          Category
        </NavLink>
      </div>
      <div
        className="more_btn"
        onClick={() => {
          const scroll = document.getElementsByClassName(".mobile_nav .container");
          scroll.scrollTo(100, 0);
        }}
      >
        <ChrevonRight />
      </div>
    </section>
  );
};

export default MobileNav;
