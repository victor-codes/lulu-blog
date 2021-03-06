import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ show, hide }) => {
  const variants = {
    initial: { x: "-100vw" },
    enter: { x: 0 },
    leave: { x: "-100vw" },
  };

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
          exact
          to="/"
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
          {`Dev </>`}
        </NavLink>
        <NavLink
          onClick={() => {
            hide(false);
          }}
          activeClassName="mobile_nav_active"
          to="/devops"
        >
          Cloud/DevOps
        </NavLink>
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
    </motion.div>
  );
};

export default MobileNav;
