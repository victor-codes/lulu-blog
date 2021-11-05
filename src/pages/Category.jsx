import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as ChervonRight } from "../assets/chervon-right.svg";
import { NavLink, useParams } from "react-router-dom";
import Post from "../components/Post";
import SubCategory from "../components/SubCategory";
import PageNotFound from "./PageNotFound";
import postList from "../data/posts.json";

const categories = {
  design: ["All", "UX Writing", "Category 1", "Category 2"],
  dev: ["All", "Python", "Category 1", "Category 2"],
  devops: ["All", "AWS", "GCP"],
  writing: ["All", "Category 1", "Category 2", "Category 3"],
};

const Category = ({ name }) => {
  const { subcategory } = useParams();

  const [subName, setSubName] = useState("All");

  const convertCategoriesToLowercase = categories[name.toLowerCase()].map(
    (item) => {
      return item.toLowerCase();
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategoryToString = subcategory.split("-").join(" ");

  function handleClick(name) {
    setSubName(name);
  }

  if (!convertCategoriesToLowercase.includes(subcategoryToString)) {
    return <PageNotFound />;
  }

  const filteredPost = postList.filter((post) => {
    if (name === post.category) {
      return post;
    } else {
      return null;
    }
  });

  return (
    <>
      <Helmet>
        <title>{name === "DevOps" ? "Cloud/DevOps" : name} - Lulu Nwenyi</title>
      </Helmet>
      <div>
        <div className="fixed_category">
          <main className="category_hero max_width">
            <h2>
              {name === "DevOps" ? "Cloud/DevOps" : name}{" "}
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
          <SubCategory name={name} handleClick={handleClick} />
        </div>
        <section id="articles" className="bg_color_article article__catergory">
          <div className="article_container max_width">
            {filteredPost.length > 0 ? (
              filteredPost.map((post, id) => <Post key={id} post={post} />)
            ) : (
              <div className="max_width no_post ">
                No post yet, come back later :(
              </div>
            )}
          </div>
          {filteredPost.length > 9 && (
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
          )}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Category;
