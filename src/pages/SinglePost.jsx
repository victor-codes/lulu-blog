import React, { useRef, useState, useLayoutEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as CheronRight } from "../assets/chervon-right.svg";
import { ReactComponent as CheronLeft } from "../assets/chervon-left.svg";
import Footer from "../components/Footer";
import Markdown from "react-markdown";
import postList from "../data/posts.json";
import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import xml from "highlight.js/lib/languages/xml";
import Meta from "../components/Meta";

const windowScroll = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

const SinglePost = () => {
  const codeRef = useRef();
  const { slug } = useParams();
  const [scroll, setScroll] = useState(0);

  let currentPost;
  let postExists = false;
  let fetchedData;

  let previousPost;
  let nextPost;

  postList.forEach((post, id) => {
    if (slug === post.slug) {
      currentPost = id;
      fetchedData = { ...postList[currentPost] };
      postExists = true;
    }
    previousPost = postList[currentPost - 1];
    nextPost = postList[currentPost + 1];
  });


  useLayoutEffect(() => {
    windowScroll();
    hljs.registerLanguage("xml", xml);
    hljs.registerLanguage("python", python);
  }, [postExists, slug]);

  useLayoutEffect(() => {
    if (postExists) {
      const pres = codeRef.current.querySelectorAll("pre");
      const strong = codeRef.current.querySelectorAll("strong");
      const img = codeRef.current.querySelectorAll("img");

      const posEl = document.querySelector(".link").getBoundingClientRect().top;
      setScroll(posEl);

      pres.forEach((node) => {
        hljs.highlightBlock(node);
      });

      strong.forEach((node) => {
        if (node.parentNode) {
          node.parentNode.style.marginBottom = "0px";
        }
      });

      img.forEach((node) => {
        node.setAttribute("loading", "lazy");
        if (node.parentNode) {
          node.parentNode.style.textAlign = "center";
          node.parentNode.style.margin = "0";
        }
      });
    }
  }, [postExists, slug]);

  useLayoutEffect(() => {
    if (postExists) {
      const pres = codeRef.current.querySelectorAll("pre");
      const a = codeRef.current.querySelectorAll("a");

      hljs.configure({ ignoreUnescapedHTML: true });

      pres.forEach((node) => {
        hljs.highlightElement(node);
        node.style.position = "relative";
      });

      a.forEach((node) => {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noreferrer noopener");
      });
    }
  }, [codeRef, postExists, slug]);

  if (!postExists) {
    return <Redirect to="/404" />;
  }

  function handleScroll(e) {
    e.preventDefault();
    return window.scrollTo(0, scroll);
  }

  let content = fetchedData.content;

  const shareTwitter = `https://twitter.com/share?url=${window.location.href}&text=I just read ${fetchedData.title} by @LuluNwenyi`;

  return (
    <div key={fetchedData.title} className="single_post_footer_bg">
      <Meta
        title={fetchedData.title}
        description={fetchedData.description}
        imageUrl={fetchedData.thumbnail}
        isBlogPost={true}
        canonicalLink={`https://lulu.wtf/${fetchedData.slug}`}
      />
      <div className="single_post_padding">
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
        <div className="gradient"></div>
      </div>
      <div className="post_bg_color">
        <div className="post__details">
          {fetchedData.thumbnail && (
            <figure>
              <img loading="eager" src={fetchedData.thumbnail} alt="" />
              <figcaption>
                {fetchedData.altText && fetchedData.altText}
              </figcaption>
            </figure>
          )}
          <article
            ref={codeRef}
            style={{ paddingTop: `${fetchedData.thumbnail ? "" : "96px"}` }}
            className="post_content"
          >
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
                href="mailto:hello@lulunwenyi.com"
              >
                hello@lulunwenyi.com
              </a>
            </p>
          </div>
          <div
            style={previousPost ? {} : { justifyContent: "flex-end" }}
            className="read"
          >
            {previousPost && (
              <Link
                onClick={(e) => {
                  if (previousPost) {
                    return;
                  }
                  return e.preventDefault();
                }}
                to={
                  previousPost &&
                  `/${previousPost.category.toLowerCase()}/post/${
                    previousPost.slug
                  }`
                }
              >
                <CheronLeft />
                <div>
                  PREVIOUS READ
                  <span>{previousPost.title}</span>
                </div>
              </Link>
            )}

            {nextPost && (
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
                <div>
                  NEXT READ
                  <span>{nextPost.title}</span>
                </div>
                <CheronRight />
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SinglePost;
