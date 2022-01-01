import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import { stringToLink, truncateString } from "../utils/helperFunction";

const Post = ({ post }) => {
  const { tags, title, publishDate, category, slug, content } = post;

  return (
    <Link to={`/${stringToLink(category)}/post/${slug}`}>
      <article className="post_article">
        <div className="info">
          <div className="tag">
            <span>{tags.toUpperCase()}</span>
          </div>
          <h3>{truncateString(title, 49)}</h3>
          <span className="timestamp">{publishDate}</span>
        </div>
        <p>{truncateString(content, 150)}</p>

        <span className="link">
          READ MORE
          <Arrow />
        </span>

        <div className="line_divider"></div>
      </article>
    </Link>
  );
};

export default Post;
