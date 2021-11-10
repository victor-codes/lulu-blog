import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import { stringToLink, truncateString } from "../utils/helperFunction";
// import { motion } from "framer-motion;

const Post = ({ post }) => {
  const { tags, title, publishDate, description, category } = post;
  // const link = {
  //   visible: { opacity: 1, y: -4 },
  //   hidden: { opacity: 0, y: 0 },
  // };

  // const item = {
  //   visible: {
  //     opacity: 1,
  //     x: 8,
  //   },
  //   hidden: {
  //     opacity: 0,
  //     x: 8,
  //   },
  // };

  const history = useHistory();

  return (
    <article
      className="post_article"
      onClick={() => {history.push(`/${stringToLink(category)}/post/${stringToLink(title)}`);}}
    >
      <div className="info">
        <div className="tag">
          <span>{tags.toUpperCase()}</span>
        </div>
        <h3>{truncateString(title, 49)}</h3>
        <span className="timestamp">{publishDate}</span>
      </div>
      <p>{truncateString(description, 150)}</p>

      <Link to={`/${stringToLink(category)}/post/${stringToLink(title)}`}>
        READ MORE
        <Arrow />
      </Link>

      <div className="line_divider"></div>
    </article>
  );
};

export default Post;
