import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { ReactComponent as ChervonRight } from "../assets/chervon-right.svg";
import { useParams } from "react-router-dom";
import SubCategory from "../components/SubCategory";
import PageNotFound from "./PageNotFound";
import Meta from "../components/Meta";
import { ReactComponent as ChervonDown } from "../assets/chervon-down.svg";

const resources = ["Technical Writing", "Cloud", "Backend", "Web3", "Projects"];

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
          <div className="flex maxw-1260 w-full margin-auto links">
            <div className="maxw-720 w-full links-all grid">
              <div>
                <h3>Cloud Computing</h3>
                <div className="resources_subbeading align-center links_pad pointer links-bg flex justify-between">
                  <p>{"🔗 "}Cloud Computing Basics</p>
                  <ChervonDown />
                </div>
                <div className="links_item_container flex items-end flex-column">
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3>Virtualization & Containerization</h3>

                <div className="resources_subbeading align-center links_pad pointer links-bg flex justify-between">
                  <p>{"🔗 "}Cloud Computing Basics</p>
                  <ChervonDown />
                </div>
                <div className="links_item_container flex items-end flex-column">
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                  <div className="link_item w-full links-bg maxw-656">
                    {"🔗 "}
                    <a
                      href="http://sdsd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-underline"
                    >
                      Amazon Web Services - Learning and Implementing AWS
                      Solution
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="quick__links">
              <h4>QUICK LINKS</h4>
              <div className="quick__links-padding links-bg">
                <ul>
                  <li>
                    <a
                      href="http://sdajhkjd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloud Computing
                    </a>{" "}
                    (AWS, GCP, Azure)
                  </li>
                  <li>
                    <a
                      href="http://sdajhkjd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloud Computing
                    </a>{" "}
                    (AWS, GCP, Azure)
                  </li>
                  <li>
                    <a
                      href="http://sdajhkjd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloud Computing
                    </a>{" "}
                    (AWS, GCP, Azure)
                  </li>
                  <li>
                    <a
                      href="http://sdajhkjd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloud Computing
                    </a>{" "}
                    (AWS, GCP, Azure)
                  </li>
                  <li>
                    <a
                      href="http://sdajhkjd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloud Computing
                    </a>{" "}
                    (AWS, GCP, Azure)
                  </li>
                  <li>
                    <a
                      href="http://sdajhkjd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cloud Computing
                    </a>{" "}
                    (AWS, GCP, Azure)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="max_width no_post ">
            No resources yet, come back later 🥲
          </div> */}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
