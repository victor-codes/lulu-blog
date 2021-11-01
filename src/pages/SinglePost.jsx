import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import Image from "../assets/post-image.jpg";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import content from "../components/Content.js";
import ReactMarkdown from "react-markdown";

const SinglePost = () => {
  const { slug } = useParams();
  const titleSlug = slug.split("-").join(" ");
  const title = titleSlug.charAt(0).toUpperCase() + titleSlug.slice(1);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const posEl = document.querySelector(".link").getBoundingClientRect().top;
    setScroll(posEl);
  }, []);

  function handleScroll(e) {
    e.preventDefault();

    return window.scrollTo(0, scroll);
  }
console.log(content);
  return (
    <div className="single_post_footer_bg">
      <Helmet>
        <title>{title} - Lulu Nwenyi</title>
      </Helmet>
      <div className="single_post">
        <div className="post_info">
          <span children="tag">DESIGN , UI/UX RESEARCH</span>
          <h2>{title}</h2>
          <span>Jan 20, 2021</span>
        </div>
        <div className="inline_flex share">
          <Link onClick={handleScroll} to="/">
            SHARE THIS ARTICLE
          </Link>
          <ArrowRight />
        </div>
      </div>
      <div className="post_bg_color">
        <div className="post__details">
          <figure>
            <img src={Image} alt="" />
            <figcaption>Image alt text</figcaption>
          </figure>
          <div className="post_content">

          <ReactMarkdown source={content} />
            
            {/* <p>
              To design user-oriented products, it’s important that you carry
              out research. User Research is a method used to understand the
              behaviors. To design user-oriented products, it’s important that
              you carry out research. User Research is a method used to
              understand the behaviors, To design user-oriented products, it’s
              important that you carry out research. User Research is a method
              used to understand the behaviors. To design user-oriented
              products, it’s important that you carry out research. User
              Research is a method used to understand the behaviors, To design
              user-oriented products, it’s important that you carry out
              research. User Research is a method used to understand the
              behaviors. To design user-oriented products, it’s important that
              you carry out research. User Research is a method used to
              understand the behaviors, To design user-oriented products, it’s
              important that you carry out research. User Research is a method
              used to understand the behaviors. To design user-oriented
              products, it’s important that you carry out research. User
              Research is a method used to understand the behaviors.
            </p> */}
          </div>
          <div className="share_link">
            <div>
              <p>SHARE TO</p>
              <div className="hr"></div>
            </div>
            <div className="link">
              <a href="/">TWITTER</a> <span>•</span>
              <a href="/">FACEBOOK</a>
              <span>•</span>
              <a href="/">LINKEDIN</a>
              <span className="none">•</span>
              <a className="none" href="/">
                WHATSAPP
              </a>
              <span className="none">•</span>
              <a className="none" href="/">
                EMAIL
              </a>
            </div>
          </div>
          <div className="contributions">
            <p>CONTRIBUTIONS</p>
            <div className="hr"></div>
          </div>
          <div className="contributions_bg_color">
            📌
            <p>
              If you would like to make any suggestions or ask questions, you
              can reach me through email -{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="mailto:me@lulu.wtf"
              >
                me@lulu.wtf{" "}
              </a>
            </p>
          </div>
          <div className="read">
            <Link to="/">
              <ArrowLeft />
              PREVIOUS READ
            </Link>
            <Link to="/">
              NEXT READ
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SinglePost;
