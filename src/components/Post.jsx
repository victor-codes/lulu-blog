import { motion } from "framer-motion";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow-right.svg";
import { stringToLink, truncateString } from "../utils/helperFunction";
const Post = ({ post }) => {
  const { tags, title, publishDate, description, category } = post;

  const link = {
    visible: { opacity: 1, y: -4 },
    hidden: { opacity: 0, y: 0 },
  };

  const item = {
    visible: {
      opacity: 1,
      x: 8,
    },
    hidden: {
      opacity: 0,
      x: 8,
    },
  };

  const history = useHistory()

  return (
    <motion.article
      whileHover="visible"
      variants={link}
      className="post_article"
      transition={{ type: "spring", duration: 0.03 }}
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
      <motion.div>
        <Link to={`/${stringToLink(category)}/post/${stringToLink(title)}`}>
          READ MORE
          <motion.div transition={{ duration: 0.03 }} variants={item}>
            <Arrow />
          </motion.div>
        </Link>
      </motion.div>
      <div className="line_divider"></div>
    </motion.article>
  );
};

export default Post;
