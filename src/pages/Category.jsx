import React, { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ChervonRight } from "../assets/chervon-right.svg";
import { NavLink, useParams } from "react-router-dom";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";
import PageNotFound from "./PageNotFound";
import postList from "../data/posts.json";
import { motion } from "framer-motion";
import { pageVariants, transition } from "../utils/variants";
import { SubCategoryContent } from "../context/Category";
import Meta from "../components/Meta";

const categories = {
  design: ["All", "UI UX", "UX Writing", "UX Research"],
  dev: ["All", "Python", "Flask", "Generic"],
  devops: ["All", "AWS", "GCP"],
  psych: ["All"],
  resources: [
    "All",
    "Cloud",
    "Backend",
    "Web3",
    "Technical Writing",
    "Projects",
  ],
};

const Category = ({ name }) => {
  const { subName } = useContext(SubCategoryContent);

  const { subcategory } = useParams();

  // const [subName, setSubName] = useState("All");
  const [currentPage] = useState(1);
  const postPerPage = 9;

  const convertCategoriesToLowercase = categories[name.toLowerCase()].map(
    (item) => {
      return item.toLowerCase();
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategoryToString = subcategory.split("-").join(" ");

  if (!convertCategoriesToLowercase.includes(subcategoryToString)) {
    return <PageNotFound />;
  }

  const filteredPosts = postList.filter((post) => {
    if (name === post.category) {
      return post;
    } else {
      return null;
    }
  });

  // pagination
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  const currentPosts = filteredPosts.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <motion.div
      key={name}
      className="section"
      exit="leave"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={transition}
    >
      <Meta
        title={name === "DevOps" ? "Cloud/DevOps" : name}
        description={`This is a Category page`}
        isBlogPost={false}
        canonicalLink={`https://sad-rosalind-d98e2f.netlify.app/${
          name === "devops" ? "cloud" : name.toLowerCase()
        }`}
      />

      <motion.div
        key={name}
        exit="leave"
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={pageVariants}
      >
        <div className="fixed_category">
          <main className="category_hero max_width">
            <h2>
              {name === "DevOps" ? "Cloud/DevOps" : name}
              <div>
                <ChervonRight /> <span>{subName}</span>
              </div>
            </h2>
            <div className="blur-effect">
              <div>
                <div className="circle_1"></div>
              </div>
            </div>
          </main>
          <SubCategory name={name} />
        </div>
        <section id="articles" className="bg_color_article article__catergory">
          <div className="article_container max_width">
            {currentPosts.length > 0 ? (
              currentPosts.map((post, id) => <Post key={id} post={post} />)
            ) : (
              <div className="max_width no_post ">
                No post yet, come back later :(
              </div>
            )}
          </div>
          {currentPosts.length >= 9 && (
            <div className="paginate">
              <button className="inline_flex">
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
              <button className="inline_flex">
                NEXT <ArrowRight />
              </button>
            </div>
          )}
        </section>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Category;
