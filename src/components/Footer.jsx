import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Bmc } from "../assets/bmc.svg";

const Footer = () => {
  return (
    <footer>
      <div className="about_container">
        {/* <div className="about hiddens">
          <div className="about_header">
            <h1>HI, I’M LULU</h1>
            <div className="hr" />
          </div>
          <p className="about_text">
            To design user-oriented products, it’s important that you carry out
            research. User Research is a method used to understand the
            behaviors. To design user-oriented products, it’s important that you
            carry out research.
            <br />
            <br />
            User Research is a method used to understand the behaviors, To
            design user-oriented products, it’s important that you carry out
            research. User Research is a method used to understand the
            behaviors. To design user-oriented products, it’s important that you
            carry out research. User Research is a method used to understand the
            behaviors,To design user-oriented products, it’s important that you
            carry out research.
            <br />
            <br />
            User Research is a method used to understand the behaviors. To
            design user-oriented products, it’s important that you carry out
            research. User Research is a method used to understand the
            behaviors,
          </p>
        </div>
        <div className="vertical_line hiddens"></div> */}
        <div className="projects_support">
          <div className="project_header hiddens">
            {/* <div className="header">
              <h2>CHECK OUT MY PROJECTS</h2>
              <div className="hr" />
            </div>
            <div className="projects">
              <div className="project_item">
                😊
                <div className="left">
                  <div>
                    <p>Make somebody smile!</p>
                    <span>
                      <Link to="/">iAffirm</Link> spreads positive affirmations
                      through tweets
                    </span>
                  </div>
                </div>
              </div>
              <div className="project_item">
                🚀
                <div className="left">
                  <div>
                    <p>Focus better!</p>
                    <span>
                      Manage your time and work efficiently with
                      <Link to="/"> Pomodoroll</Link> .
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div> */}
            <div className="header">
              <h2>SUPPORT MY WORK</h2>
              <div className="hr" />
            </div>

            <div>
              <div className="support">
                <Bmc />
                <div>
                  <p>Become a Sponsor.</p>
                  <span>
                    If you enjoy any of my projects or articles, you can support
                    my content using
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      href="https://www.buymeacoffee.com/lulunwenyi"
                    >
                      {" "}
                      buymeacoffee{" "}
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_footer"></div>
      </div>
      <div className="menu_bg">
        <div className="menu">
          <nav className="menu_items">
            <Link to="/">Twitter</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Email</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Sponsor</Link>
          </nav>
          <p className="copyright">
            Copyrights &#169; 2021, Lulu Nwenyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
