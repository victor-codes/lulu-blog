import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReactComponent as Scroll } from "../assets/scroll.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home_hero max_width">
        <h2>Learn. Share. Grow.</h2>
        <p>
          Hello! Welcome to my blog. On here, you can find articles on{" "}
          <Link to="category/design">Design</Link>,{" "}
          <Link to="category/backend">Backend Development</Link>,
          <Link to="category/writing"> Technical Writing</Link>, and More.
        </p>
        <div>
          <Scroll />
          Scroll to continue
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
