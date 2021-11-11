import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChrevonRight } from "../assets/chervon-right.svg";
import { ReactComponent as ChrevonLeft } from "../assets/chervon-left.svg";
import { stringToLink } from "../utils/helperFunction";
import { SubCategoryContent } from "../context/Category";

const SubCategory = ({ name }) => {
  const categories = {
    home: {
      All: "home",
      Design: "design",
      Dev: "dev",
      "Cloud/DevOps": "cloud",
      Resources: "resources",
      Sponsor: "Sponsor",
    },
    design: {
      All: "all",
      "UI UX": "ui/ux",
      "UX Writing": "ux-writing",
      "UX Research": "ux-research",
    },
    dev: {
      All: "all",
      Python: "python",
      Flask: "flask",
      Generic: "generic",
    },
    psych: {
      All: "all",
    },
    devops: {
      All: "all",
      AWS: "aws",
      GCP: "gcp",
    },
    resources: {
      All: "all",
      "Cloud/DevOps": "cloud",
      Backend: "backend",
      Web3: "web3",
      "Technical Writing": "technical-writing",
      Projects: "projects",
    },
  };

  const category = name.toLowerCase();
  const [scrollX, setScrollX] = useState(true);

  const { setSubName } = useContext(SubCategoryContent);

  return (
    <div>
      <section className="mobile_nav">
        <div className="container">
          {categories[category] &&
            Object.keys(categories[category]).map((item, id) => (
              <NavLink
                key={id}
                onClick={() => {
                  if (category === "home") {
                    return;
                  }
                  setSubName(item);
                }}
                activeClassName="active"
                to={stringToLink(categories[category][item])}
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
    </div>
  );
};

export default SubCategory;
