import React, { useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
// import { ReactComponent as Scroll } from "../assets/scroll.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ChervonRight } from "../assets/chervon-right.svg";
import { NavLink } from "react-router-dom";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";

const dummyJson = [
  "ewq",
  "wqerqw",
  "ewq",
  "wqerqw",
  "ewq",
  "wqerqw",
  "ewq",
  "wqerqw",
  "ewq",
];

const Category = ({ name }) => {
  const [subName, setSubName] = useState("All");

  function handleClick(name) {
    setSubName(name);
  }
  return (
    <>
      <Helmet>
        <title>{name} - Lulu Nwenyi</title>
      </Helmet>
      <Header />
      <div>
        {" "}
        {/* <div className="blur_effect"></div> */}
        <main className="category_hero max_width">
          <h2>
            {name}{" "}
            <div>
              <ChervonRight /> <span>{subName}</span>
            </div>
          </h2>
          {/* <div className="scroll noselect"
            onClick={() => {
              return window.scrollTo(0, scroll);
            }}
          >
            <Scroll />
            Scroll to continue
          </div> */}
        </main>
        <SubCategory name={name} handleClick={handleClick} />
        <section id="articles" className="bg_color_article">
          <div className="article_container max_width">
            {dummyJson.map((item) => (
              <Post
                category={name}
                tag="FLASK, DOCKER"
                title="How to get started with Flask, Docker and AWS for beginners"
                timestamp="Jan 20, 2021"
                body="To design user-oriented products, it’s important that you carry out research. User Research is a method used to understand the behaviours derstand thedfs"
              />
            ))}
          </div>
          <div className="paginate">
            <button
              className="inline_flex"
              // onClick={() => {
              //   // history.push(prevPage(page));
              // }}
            >
              <ArrowLeft className="left" /> PREVIOUS
            </button>
            <div className="link">
              <NavLink activeClassName="page" to={`/home/1`}>
                1
              </NavLink>
              <NavLink activeClassName="page" to={`/home/2`}>
                2
              </NavLink>
              <NavLink activeClassName="page" to={`/home/3`}>
                3
              </NavLink>
              <span>•••</span>
              <NavLink activeClassName="page" to="/home/12">
                12
              </NavLink>
            </div>
            <button
              // onClick={() => {
              //   // history.push(nextPage(page, 12));
              // }}
              className="inline_flex"
            >
              NEXT <ArrowRight />
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Category;
