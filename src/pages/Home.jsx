import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
// import { NavLink } from "react-router-dom";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";
import { useInView } from "react-intersection-observer";

import postList from "../data/posts.json";
import { motion } from "framer-motion";
import { pageVariants, transition } from "../utils/variants";
import Meta from "../components/Meta";

const Home = () => {
  const [scroll, setScroll] = useState(0);
  const [subName, setSubName] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const postLength = postList.length;
  const paginate = postLength % 9;

  let paginateArray = [];

  for (let i = 1; i <= paginate; i++) {
    paginateArray.push(i);
  }

  function handleClick(name) {
    setSubName(name);
  }

  useEffect(() => {
    const articleTop = document
      .querySelector(".bg_color_article")
      .getBoundingClientRect().top;
    setScroll(articleTop);
  }, [scroll]);

  // pagination
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  const currentPosts = postList.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  const [styles, setStyles] = useState("");
  const [stylesArt, setStylesArt] = useState("");
  const [styleCat, setStylesCat] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      if (window.scrolly === 0) {
        setStylesArt("");
        setStyles("static_style");
      } else if (inView && scrollY === 0) {
        setStyles("static_style");
        setStylesCat("");
        setStylesArt("");
      } else if (scrollY >= 160) {
        setStylesArt(`articles_fixed ${subName}`);
        setStylesCat("sub__category_fixed");
        return setStyles("fixed_style");
      }
    });
  });

  return (
    <>
      <Meta
        title="Blog"
        description="Welcome to Lulu Nwenyi personal blog"
        isBlogPost={false}
        canonicalLink={`https://sad-rosalind-d98e2f.netlify.app/home`}
      />
      <motion.div
        key="home"
        exit="leave"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={transition}
      >
        <div ref={ref} className={`fixed hero_fixed trigger ${styles}`}>
          <div className="blur_fect"></div>
          <main className="home_hero max_width">
            <h2>Learn. Share. Grow.</h2>
            <p>
              Hello! Welcome to my blog. On here, you can find articles on{" "}
              <span to="category/design">Design</span>,{" "}
              <span to="category/backend">Backend Development</span>,{" "}
              <span to="category/writing">Technical Writing</span>, and More.
            </p>
          </main>
          <div className="home_subcategory"></div>
        </div>
        <section
          id="articles"
          className={`article_trigger bg_color_article ${stylesArt}`}
        >
          <SubCategory
            name="Home"
            handleClick={handleClick}
            styles={styleCat}
          />
          <div className="article_container max_width">
            {currentPosts.map((post, id) => (
              <Post post={post} key={id} />
            ))}
          </div>
          {postList.length > 9 && (
            <div className="paginate">
              <button
                className="inline_flex"
                onClick={() => {
                  if (currentPage === 1 || paginate === currentPage) {
                    return;
                  }
                  setCurrentPage(currentPage - 1);
                }}
              >
                <ArrowLeft className="left" /> PREVIOUS
              </button>
              <div className="link">
                <button
                  activeClassName="page"
                  onClick={() => setCurrentPage(1)}
                  // to="/home/1"
                >
                  1
                </button>
                {paginateArray.map((item, id) => (
                  <button
                    key={id}
                    onClick={() => setCurrentPage(item + 1)}
                    activeClassName="page"
                    // to={`/home/${item + 1}`}
                  >
                    {item + 1}
                  </button>
                ))}
                {/* {paginateArray.length > 2 && ( */}
                {/* <>
                  <NavLink activeClassName="page" to={`/home/3`}>
                    3
                  </NavLink>
                  <span>•••</span>
                  <NavLink activeClassName="page" to="/home/12">
                    12
                  </NavLink>
                </> */}
                {/* )} */}
              </div>
              <button
                onClick={() => {
                  if (paginate < currentPage) {
                    return;
                  }
                  setCurrentPage(currentPage + 1);
                }}
                className="inline_flex"
              >
                NEXT <ArrowRight />
              </button>
            </div>
          )}
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
