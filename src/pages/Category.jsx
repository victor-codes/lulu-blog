import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ChervonRight } from "../assets/chervon-right.svg";
import { NavLink, useParams } from "react-router-dom";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";
import PageNotFound from "./PageNotFound";
import postList from "../data/posts.json";
import Meta from "../components/Meta";

const categories = {
  design: ["All", "UI&UX", "UX Writing", "UX Research"],
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
  const { subcategory } = useParams();
  const [subName, setSubName] = useState("All");
  const [currentPage] = useState(1);
  const postPerPage = 9;

  const convertCategoriesToLowercase = categories[name.toLowerCase()].map(
    (item) => {
      return item.toLowerCase();
    }
  );

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const subCategoryToString = subcategory.split("-").join(" ");

  useEffect(() => {
    if (subCategoryToString) {
      let index = convertCategoriesToLowercase.indexOf(subCategoryToString);
      setSubName(categories[name.toLowerCase()][index]);
    }
  }, [name, convertCategoriesToLowercase, subCategoryToString]);

  if (!convertCategoriesToLowercase.includes(subCategoryToString)) {
    return <PageNotFound />;
  }

  const filteredPosts = postList.filter((post) => {
    if (name === post.category) {
      if (subName === "All") {
        return post;
      } else if (subName === post.subCategory) {
        return post;
      }
    }
    return null;
  });

  function handleClick(e) {
    setSubName(e);
  }

  // pagination
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;

  const currentPosts = filteredPosts.slice(indexOfFirstPage, indexOfLastPage);

  const metaDesc = {
    design: "On here you can find articles related to Design",
    dev: "On here you can find articles related to Software Devolopment",
    devops: "On here you can find articles related to Cloud and DevOps",
  };
  
  return (
    <div key={name} className="section">
      <Meta
        title={name === "DevOps" ? "Cloud/DevOps" : name}
        description={metaDesc[name.toLowerCase()]}
        isBlogPost={false}
        canonicalLink={`https://lulu.wtf/${
          name === "devops" ? "cloud" : name.toLowerCase()
        }`}
      />

      <div key={name}>
        <div className="fixed_category">
          <main className="category_hero max_width gradient_container">
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
            <div className="gradient"></div>
          </main>
          <SubCategory name={name} handleClick={handleClick} />
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
      </div>

      <Footer />
    </div>
  );
};

export default Category;
