import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ show, hide }) => {
  const variants = {
    initial: { x: "-100vw" },
    enter: { x: 0 },
    leave: { x: "-100vw" },
  };
  // function handleClick() {
  //   hide(false);
  // }
  return (
    <motion.div
      key="1"
      variants={variants}
      initial={variants.initial}
      animate={show ? variants.enter : variants.leave}
      exit={variants.initial}
      transition={{ type: "spring", duration: 0.03 }}
      className="mobile__nav"
    >
      <nav>
        <NavLink
          onClick={() => {
            hide(false);
          }}
          activeClassName="mobile_nav_active a"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            hide(false);
          }}
          activeClassName="mobile_nav_active"
          to="/design"
        >
          Design
        </NavLink>
        <NavLink
          onClick={() => {
            hide(false);
          }}
          activeClassName="mobile_nav_active"
          to="/dev"
        >
          {"Dev </>"}
        </NavLink>
        <NavLink
          onClick={() => {
            hide(false);
          }}
          activeClassName="mobile_nav_active"
          to="/writing"
        >
          Writing
        </NavLink>
        <NavLink
          onClick={() => {
            hide(false);
          }}
          activeClassName="mobile_nav_active"
          to="/resources"
        >
          Resources
        </NavLink>
        <NavLink
          onClick={() => {
            hide(false);
          }}
          activeClassName="mobile_nav_active"
          to="/sponsor"
        >
          Sponsor
        </NavLink>
      </nav>
    </motion.div>
  );
};

export default MobileNav;
