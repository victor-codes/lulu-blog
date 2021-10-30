import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChrevonRight } from "../assets/chervon-right.svg";
import { stringToLink } from "../utils/helperFunction";

const SubCategory = ({ name, handleClick }) => {
  const category = name.toLowerCase();
  const categories = {
    design: ["All", "UX Writing", "Category", "Category"],
    dev: ["All", "Backend", "Category", "Categry"],
    writing: ["All", "Category", "Category", "Category"],
    home: ["All", "Category", "Category", "Category"],
  };

  console.log(categories[name]);

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
      <div
        className="more_btn"
        onClick={() => {
          const scroll = document.getElementsByClassName(
            ".mobile_nav .container"
          );
          scroll.scrollTo(100, 0);
        }}
      >
        <ChrevonRight />
      </div>
    </section>
  );
};

export default SubCategory;
