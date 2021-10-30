import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import { stringToLink, truncateString } from "../utils/helperFunction";

const Post = ({ tag, title, timestamp, body, category }) => {
  return (
    <article className="post_article">
      <div className="info">
        <span className="tag">{tag}</span>
        <h3>{truncateString(title, 49)}</h3>
        <span className="timestamp">{timestamp}</span>
      </div>
      <p>{truncateString(body, 150)}</p>
      <Link to={`/${stringToLink(category)}/post/${stringToLink(title)}`}>
        READ MORE <Arrow />{" "}
      </Link>
      <div className="line_divider"></div>
    </article>
  );
};

export default Post;
