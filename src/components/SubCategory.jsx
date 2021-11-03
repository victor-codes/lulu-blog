import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChrevonRight } from "../assets/chervon-right.svg";
import { ReactComponent as ChrevonLeft } from "../assets/chervon-left.svg";
import { stringToLink } from "../utils/helperFunction";
// import { motion } from "framer-motion";

const SubCategory = ({ name, handleClick }) => {
  const categories = {
    home: ["All", "Design", "Dev", "Writing"],
    design: ["All", "UX Writing", "Category 1", "Category 2"],
    dev: ["All", "Backend", "Category 1", "Category 2"],
    writing: ["All", "Category 1", "Category 2", "Category 3"],
  };

  const category = name.toLowerCase();
  const [scrollX, setScrollX] = useState(true);
  return (
    <section className="mobile_nav">
      <div className="container">
        {categories[category] &&
          categories[category].map((item, id) => (
            <NavLink
              key={id}
              onClick={() => {
                handleClick(item);
              }}
              activeClassName="active"
              to={`${stringToLink(item)}`}
            >
              {item}
            </NavLink>
          ))}
      </div>
      <div className="less_btn">
        {!scrollX ? (
          <ChrevonLeft
            onClick={() => {
              const scroll = document.querySelector(".mobile_nav .container");
              const width = scroll.clientWidth;
              scroll.scrollBy(-width, 0);
              return setScrollX(true);
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="more_btn">
        {scrollX && (
          <ChrevonRight
            onClick={() => {
              const scroll = document.querySelector(".mobile_nav .container");
              const width = scroll.clientWidth;
              scroll.scrollBy(width, 0);
              return setScrollX(false);
            }}
          />
        )}
      </div>
    </section>
  );
};

export default SubCategory;
