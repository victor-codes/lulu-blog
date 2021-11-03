import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
// import { ReactComponent as Scroll } from "../assets/scroll.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link, NavLink } from "react-router-dom";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";
import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

import postList from "../data/posts.json";
// import { fetchPostContent } from "../utils/main";
// import { fetchPostContent, PostContent } from "../utils/main";

const Home = () => {
  const [scroll, setScroll] = useState(0);
  const [subName, setSubName] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

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
  console.log(currentPosts);

  // gsap.registerPlugin(ScrollTrigger);

  // gsap.to(".trigger", {
  //   scrollTrigger: {
  //     trigger: ".trigger",
  //     start: "top 13px",
  //     markers: true,
  //     // pin: true,
  //     scrub: true,
  //     end: () => {
  //       return (
  //         document.body.scrollX
  //       );
  //     },
  //   },
  //   // position: "sticky",
  //   top: 83,
  //   zIndex: 5,
  // });

  const { ref, inView } = useInView({
    threshold: 1,
  });
  // const animation = useAnimation();
  const [styles, setStyles] = useState("");
  const [stylesArt, setStylesArt] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      // setScrollY(window.scrollY);
      // console.log(scrollY);
      if (window.scrolly === 0) {
        setStylesArt("");
        setStyles("static_style");
      } else if (inView && scrollY === 0) {
        setStyles("static_style");
        setStylesArt("");
      } else if (scrollY > 264) {
        setStylesArt(`articles_fixed ${subName}`);
        return setStyles("fixed_style");
      }
    });
  });
  // fetchPostContent()

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //   }); background: var(--primary-background-blur);
  // }, [scrollY]);

  return (
    <>
      <Helmet>
        <title>Blog - Lulu Nwenyi</title>
      </Helmet>
      <div>
        <div ref={ref} className={`fixed hero_fixed trigger ${styles}`}>
          <div className="blur_fect"></div>
          <main className="home_hero max_width">
            <h2>Learn. Share. Grow.</h2>
            <p>
              Hello! Welcome to my blog. On here, you can find articles on{" "}
              <Link to="category/design">Design</Link>,{" "}
              <Link to="category/backend">Backend Development</Link>,
              <Link to="category/writing"> Technical Writing</Link>, and More.
            </p>
          </main>
          <div className="home_subcategory"></div>
        </div>
        <section
          id="articles"
          className={`article_trigger bg_color_article ${stylesArt}`}
        >
          <SubCategory name="Home" handleClick={handleClick} />
          <div className="article_container max_width">
            {currentPosts.map((post, id) => (
              <Post post={post} key={id} />
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
              onClick={() => {
                // setCurrentPage()
              }}
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

export default Home;
