import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";
import postList from "../data/posts.json";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Meta from "../components/Meta";
import { NavLink, useParams, useHistory } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const Home = () => {
  const history = useHistory();
  const { page } = useParams();
  const { scrollY } = useViewportScroll();
  const styles = useTransform(scrollY, [0, 0.4, 0.5], ["100%", "100%", "0px"]);
  const padding = useTransform(
    scrollY,
    [0, 0.4, 0.5],
    ["110px", "110px", "0px"]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const postLength = postList.length;
  const paginate = postLength % 9;


  const paginateArray = [];

  for (let i = 1; i <= Math.ceil(postLength / postPerPage); i++) {
    paginateArray.push(i);
  }

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (window.location.pathname.includes("/blog")) {
      if (paginateArray.includes(Number(page))) {
        setCurrentPage(Number(page));
      }
    }
  }, [page, paginateArray]);

  if (window.location.pathname.includes("/blog")) {
    if (!paginateArray.includes(Number(page))) {
      return <PageNotFound />;
    }
  }

  // pagination
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = postList.slice(indexOfFirstPage, indexOfLastPage);

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
                  history.push(`/blog/${currentPage - 1}`);
                }}
              >
                <ArrowLeft className="left" /> PREVIOUS
              </button>
              <div className="link">
                {paginateArray.map((item, id) => (
                  <NavLink
                    exact
                    to={`${item === 1 ? "" : `/blog/${item}`}`}
                    key={id}
                    activeClassName="page"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
              <button
                onClick={() => {
                  if (paginateArray[paginateArray.length - 1] === currentPage) {
                    return;
                  }
                  history.push(`/blog/${currentPage + 1}`);
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
