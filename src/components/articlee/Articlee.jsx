// eslint-disable-next-line no-unused-vars
import React from "react";
import "./articlee.css";

// eslint-disable-next-line react/prop-types
const Articlee = ({ imgUrl, data, text }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog " />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{data}</p>
          <h3>{text}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
};

export default Articlee;
