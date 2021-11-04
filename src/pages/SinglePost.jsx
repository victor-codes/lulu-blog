import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import postList from "../data/posts.json";

import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";

const SinglePost = () => {
  const codeRef = useRef();
  const { slug } = useParams();
  const [scroll, setScroll] = useState(0);

  let currentPost;
  let postExists = false;
  let fetchedData;

  let previousPost;
  let nextPost;

  useEffect(() => {
    window.scroll(0, 0);
    if (postExists) {
      const pres = codeRef.current.querySelectorAll("pre");
      const val = codeRef.current.querySelectorAll("img");
      val.forEach((node) => {
        if (node.parentNode) {
          node.parentNode.style.textAlign = "center";
        }
      });

      pres.forEach((node) => {
        hljs.highlightBlock(node);
      });
    }
  });

  useEffect(() => {
    if (postExists) {
      const pres = codeRef.current.querySelectorAll("pre");
      const a = codeRef.current.querySelectorAll("a");
      pres.forEach((node) => {
        hljs.highlightBlock(node);
      });
      a.forEach((node) => {
        node.setAttribute("target", "_blamk");
        node.setAttribute("rel", "noreferrer noopener");
      });
    }
  }, [codeRef, postExists]);

  postList.map((post, id) => {
    if (slug === post.slug) {
      currentPost = id;
      fetchedData = { ...postList[currentPost] };
      postExists = true;
    }
    previousPost = postList[currentPost - 1];
    nextPost = postList[currentPost + 1];
    return null;
  });

  useEffect(() => {
    if (postExists) {
      window.scrollTo(0, 0);
      const posEl = document.querySelector(".link").getBoundingClientRect().top;
      setScroll(posEl);
      hljs.registerLanguage("css", css);
      hljs.registerLanguage("xml", xml);
      hljs.registerLanguage("python", python);
    }
  }, [postExists]);

  if (!postExists) {
    return <Redirect to="/404" />;
  }

  function handleScroll(e) {
    e.preventDefault();

    return window.scrollTo(0, scroll);
  }

  hljs.registerLanguage("css", css);
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("python", python);

  let content = fetchedData.content;

  const shareTwitter = `https://twitter.com/share?url=${window.location.href}&text=I just read ${fetchedData.title} by @LuluNwenyi`;

  return (
    <div className="single_post_footer_bg">
      <Helmet>
        <title>{fetchedData.title} - Lulu Nwenyi</title>
      </Helmet>
      <div className="single_post">
        <div className="post_info">
          <span children="tag">{fetchedData.tags}</span>
          <h2>{fetchedData.title}</h2>
          <span>{fetchedData.publishDate}</span>
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
          {fetchedData.thumbnail && (
            <figure>
              <img src={fetchedData.thumbnail} alt="" />
              <figcaption>
                {fetchedData.altText && fetchedData.altText}
              </figcaption>
            </figure>
          )}
          <article ref={codeRef} className="post_content">
            <Markdown source={content} escapeHtml={false} />
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
              <a
                href={`https://www.linkedin.com/shareArticle?url={${window.location.href}}&title={${fetchedData.title}}&summary={${fetchedData.description}}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                LINKEDIN
              </a>
              <span className="none">•</span>
              <a
                className="none"
                href={`https://api.whatsapp.com/send?text=${window.location.href} I just read ${fetchedData.title} by LuluNwenyi`}
                target="_blank"
                data-action="share/whatsapp/share"
                rel="noreferrer noopener"
              >
                WHATSAPP
              </a>
              <span className="none">•</span>
              <a
                className="none"
                href="mailto:hello@lulu.wtf"
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
                href="mailto:hello@lulu.wtf"
              >
                hello@lulu.wtf{" "}
              </a>
            </p>
          </div>
          <div className="read">
            <Link
              onClick={(e) => {
                if (previousPost) {
                  return;
                }
                return e.preventDefault();
              }}
              to={
                previousPost
                  ? `/${previousPost.category.toLowerCase()}/post/${
                      previousPost.slug
                    }`
                  : ""
              }
            >
              <ArrowLeft />
              PREVIOUS READ
            </Link>

            <Link
              onClick={(e) => {
                if (nextPost) {
                  return;
                }
                return e.preventDefault();
              }}
              to={
                nextPost &&
                `/${nextPost.category.toLowerCase()}/post/${nextPost.slug}`
              }
            >
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
