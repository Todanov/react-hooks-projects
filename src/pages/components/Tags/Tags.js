import React from "react";

import './index.css'
const Tags = ({tagList}) => {
  return (
    <ul className="article__tags">
      {tagList.map((tag) => (
        <li className="article__tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
