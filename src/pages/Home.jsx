import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";
import postList from "../data/posts.json";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Meta from "../components/Meta";

const Home = () => {
  const { scrollY } = useViewportScroll();
  const styles = useTransform(scrollY, [0, 0.4, 0.5], ["100%", "100%", "0px"]);
  const padding = useTransform(
    scrollY,
    [0, 0.4, 0.5],
    ["110px", "110px", "0px"]
  );
  const [scroll, setScroll] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const postLength = postList.length;
  const paginate = postLength % 9;

  let paginateArray = [];

  for (let i = 1; i <= Math.ceil(postLength / postPerPage); i++) {
    paginateArray.push(i);
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
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Meta
        title="Blog"
        description="Welcome to Lulu Nwenyi personal blog"
        isBlogPost={false}
        canonicalLink={`https://sad-rosalind-d98e2f.netlify.app/home`}
      />
      <div key="home">
        <div className="fixed_home">
          <div className="fixed_category">
            <main className={`home_hero max_width`}>
              <div className="gradient"></div>
              <h2>Learn. Share. Grow.</h2>
              <motion.p
                style={{
                  height: styles,
                  overflow: "hidden",
                  paddingBottom: padding,
                }}
              >
                Hello! Welcome to my blog. On here, you can find articles on{" "}
                <span>Design</span>, <span>Backend Development</span>,{" "}
                <span>Technical Writing</span>, and More.
              </motion.p>
            </main>
          </div>
          <SubCategory name="Home" />
        </div>
        <section id="articles" className={`article_trigger bg_color_article`}>
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
                  window.scrollTo(9, scroll);
                }}
              >
                <ArrowLeft className="left" /> PREVIOUS
              </button>
              <div className="link">
                {paginateArray.map((item, id) => (
                  <button
                    key={id}
                    onClick={() => {
                      setCurrentPage(item);
                      window.scrollTo(9, scroll);
                    }}
                    className={`${item === currentPage ? "page" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  if (paginateArray[paginateArray.length - 1] === currentPage) {
                    return;
                  }
                  setCurrentPage(currentPage + 1);
                  window.scrollTo(9, scroll);
                }}
                className="inline_flex"
              >
                NEXT <ArrowRight />
              </button>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
