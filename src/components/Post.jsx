import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import { stringToLink, truncateString } from "../utils/helperFunction";

const Post = ({ post }) => {
  const { tags, title, publishDate, category, slug, content } = post;

  return (
    <Link className="Post" to={`/${stringToLink(category)}/post/${slug}`}>
      <article>
        <div className="Post_info">
          <div>
            <span>{tags.toUpperCase()}</span>
          </div>
          <h3>{truncateString(title, 49)}</h3>
          <span>{publishDate}</span>
        </div>
        <p>{truncateString(content, 150)}</p>

        <span>
          READ MORE
          <Arrow />
        </span>

        <div className="line"></div>
      </article>
    </Link>
  );
};

export default Post;
