import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Bmc } from "../assets/bmc.svg";

const Footer = () => {
  return (
    <footer key="footer">
      <div className="about_container">
        <div className="projects_support">
          <div className="project_header hiddens">
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
                    my content using{" "}
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      href="https://www.buymeacoffee.com/lulunwenyi"
                    >
                      buymeacoffee
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
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.twitter.com/luluNwenyi"
            >
              Twitter
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/lulunwenyi"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/lulunwenyi"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.medium.com/@lulunwenyi"
            >
              Medium
            </a>
            <Link to="/resources">Resources</Link>
            <Link to="/psych">Psych</Link>
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
