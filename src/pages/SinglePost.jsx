import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import postData from "../data/posts.json";
import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";

const SinglePost = () => {
  const codeRef = useRef();
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

  hljs.registerLanguage("css", css);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("python", python);

  let fetchedData = postData[0];

  let content = fetchedData.content;

  useEffect(() => {
    const nodes = codeRef.current.querySelectorAll("pre");
    nodes.forEach((node) => {
      hljs.highlightBlock(node);
    });
  }, [codeRef]);

  const shareTwitter = `https://twitter.com/share?url=${window.location.href}&text=I just read ${fetchedData.title} by @LuluNwenyi`;

  return (
    <div className="single_post_footer_bg">
      <Helmet>
        <title>{fetchedData.title} - Lulu Nwenyi</title>
      </Helmet>
      <div className="single_post">
        <div className="post_info">
          <span children="tag">DESIGN , UI/UX RESEARCH</span>
          <h2>{fetchedData.title}</h2>
          <span>J{fetchedData.date}</span>
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
            <img src={fetchedData.thumbnail} alt="" />
            <figcaption>Image alt text</figcaption>
          </figure>
          <article ref={codeRef} className="post_content">
            <Markdown source={content} escapeHtml={true} />

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
          </article>
          <div className="share_link">
            <div>
              <p>SHARE TO</p>
              <div className="hr"></div>
            </div>
            <div className="link">
              <a href={shareTwitter} target="_blank" rel="noreferrer noopener">
                TWITTER
              </a>{" "}
              <span>•</span>
              <a href="/" target="_blank" rel="noreferrer noopener">
                FACEBOOK
              </a>
              <span>•</span>
              <a href="/" target="_blank" rel="noreferrer noopener">
                LINKEDIN
              </a>
              <span className="none">•</span>
              <a
                className="none"
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                WHATSAPP
              </a>
              <span className="none">•</span>
              <a
                className="none"
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
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
