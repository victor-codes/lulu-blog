import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import { stringToLink, truncateString } from "../utils/helperFunction";

const Post = ({ post }) => {
  const { tags, title, publishDate, description, category } = post;

  return (
    <article className="post_article">
      <div className="info">
        <div className="tag">
          {tags.map((tag, i) => (
            <span key={i}>{tag.toUpperCase()}</span>
          ))}
        </div>
        <h3>{truncateString(title, 49)}</h3>
        <span className="timestamp">{publishDate}</span>
      </div>
      <p>{truncateString(description, 150)}</p>
      <Link to={`/${stringToLink(category)}/post/${stringToLink(title)}`}>
        READ MORE <Arrow />{" "}
      </Link>
      <div className="line_divider"></div>
    </article>
  );
};

export default Post;
