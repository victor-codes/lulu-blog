import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { ReactComponent as ChervonRight } from "../assets/chervon-right.svg";
import { useParams } from "react-router-dom";
import SubCategory from "../components/SubCategory";
import PageNotFound from "./PageNotFound";
import Meta from "../components/Meta";

const resources = [
  "All",
  "Cloud",
  "Backend",
  "Web3",
  "Technical Writing",
  "Projects",
];

const Resources = () => {
  const name = "Resources";
  const { subcategory } = useParams();
  const [subName, setSubName] = useState("All");

  const convertCategoriesToLowercase = resources.map((item) => {
    return item.toLowerCase();
  });

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
      setSubName(resources[index]);
    }
  }, [name, convertCategoriesToLowercase, subCategoryToString]);

  if (!convertCategoriesToLowercase.includes(subCategoryToString)) {
    return <PageNotFound />;
  }

  //   const filteredPosts = postList.filter((post) => {
  //     if (name === post.category) {
  //       if (subName === "All") {
  //         return post;
  //       } else if (subName === post.subCategory) {
  //         return post;
  //       }
  //     }
  //     return null;
  //   });

  function handleClick(e) {
    setSubName(e);
  }

  return (
    <div key={name} className="section">
      <Meta
        title={name === "DevOps" ? "Cloud/DevOps" : name}
        description="On here you can find resources for Design, Software Development"
        isBlogPost={false}
        canonicalLink="https://lulu.wtf/resources"
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
          {/* <div className="article_container max_width">
            {curren name="Resources"tPosts.length > 0 ? (
              currentPosts.map((post, id) => <Post key={id} post={post} />)
            ) : (
                )}
            </div> */}
          <div className="max_width no_post ">
            No resources yet, come back later 🥲
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
