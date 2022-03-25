import React from "react";
import { Link } from "react-router-dom";
import Tags from "../Tags/Tags";
import User from "../User/User";

import "./index.css";

const Feed = ({ articles }) => {
  return (
    <div className="articles">
      {articles.map((article, index) => (
        <div className="article" key={index}>
             < hr/>
          <div className="article__info">
            <User article={article}/>
           
            <Link to={`/articles/${article.slug}`} className="article__title">
                <h1 className="article__title__name">{article.title}</h1>
                <p className="article__description">{article.description}</p>
            </Link>
            <div className="article__subtitle">
             <span className="article__description__more">Reed more....</span>
              <Tags tagList={article.tagList}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
