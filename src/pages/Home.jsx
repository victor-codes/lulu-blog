import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
// import { ReactComponent as Scroll } from "../assets/scroll.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link, NavLink } from "react-router-dom";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";

const Home = () => {
  const [scroll, setScroll] = useState(0);
  const [subName, setSubName] = useState("All");

  function handleClick(name) {
    setSubName(name);
  }

  useEffect(() => {
    const articleTop = document
      .querySelector(".bg_color_article")
      .getBoundingClientRect().top;
    setScroll(articleTop);
    console.log(articleTop);
  }, [scroll]);

  const dummyJson = [
    "dev",
    "design",
    "writing",
    "writing",
    "dev",
    "dev",
    "design",
    "design",
    "dev",
  ];
  // const { page } = useParams();
  // const pageToString = parseInt(page, 10);

  // function selizerNext(page) {
  //   let fixedPage;
  //   if (page === 12) {
  //     fixedPage = "";
  //   } else {
  //     fixedPage = page + 1;
  //   }
  //   return fixedPage;
  // }
  // function selizer(page) {
  //   let fixedPage;
  //   if (page === 12) {
  //     fixedPage = "";
  //   }
  //   return fixedPage;
  // }
  // function selizerPrev(page) {
  //   let fixedPage;

  //   if (page === 1) {
  //     fixedPage = "";
  //   } else {
  //     fixedPage = page - 1;
  //   }

  //   return fixedPage;
  // }

  // const [pageList, setPageList] = useState({
  //   one: selizerPrev(pageToString),
  //   two: selizer(pageToString),
  //   three: selizerNext(pageToString),
  // });
  // const history = useHistory();

  // const prevPage = (page) => {
  //   let newPage = parseInt(page, 10);
  //   if (newPage > 1) {
  //     newPage -= 1;
  //     if (newPage < 1) {
  //       setPageList({ one: "", two: newPage, three: newPage + 1 });
  //     } else {
  //       setPageList({ one: newPage - 1, two: newPage, three: newPage + 1 });
  //     }

  //     return String(newPage);
  //   } else return String(newPage);
  // };
  // const nextPage = (page, total) => {
  //   let newPage = parseInt(page, 10);
  //   if (total > newPage) {
  //     newPage += 1;
  //     if (newPage === 12) {
  //       setPageList({ one: newPage - 1, two: newPage, three: "" });
  //     } else {
  //       setPageList({ one: newPage - 1, two: newPage, three: newPage + 1 });
  //     }
  //     return String(newPage);
  //   } else return String(newPage);
  // };

  return (
    <>
      <Helmet>
        <title>Blog - Lulu Nwenyi</title>
      </Helmet>
      <Header />
      <div>
        <div className="blur_effect"></div>
        <main className="home_hero max_width">
          <h2>Learn. Share. Grow.</h2>
          <p>
            Hello! Welcome to my blog. On here, you can find articles on{" "}
            <Link to="category/design">Design</Link>,{" "}
            <Link to="category/backend">Backend Development</Link>,
            <Link to="category/writing"> Technical Writing</Link>, and More.
          </p>
          {/* <div className="scroll noselect"
            onClick={() => {
              return window.scrollTo(0, scroll);
            }}
          >
            <Scroll />
            Scroll to continue
          </div> */}
        </main>
        <div className="home_subcategory">
          <SubCategory name="Home" handleClick={handleClick} />
        </div>
        <section id="articles" className="bg_color_article">
          <div className="article_container max_width">
            {dummyJson.map((item) => (
              <Post
                category={item}
                tag="FLASK, DOCKER"
                title="How to get started with Flask, Docker and AWS forsfh"
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

export default Home;
