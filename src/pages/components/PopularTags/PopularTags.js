import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import useFetch from "../hooks/useFetch";
import Loading from "../Loading/Loading";

import './index.css'

const PopularTags = () => {
  const [{ isResponse, isLoading, isErorr }, doFetch] = useFetch("/tags");
  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !isResponse) {
    return <Loading />;
  }

  if (isErorr) {
    return <ErrorBoundary />;
  }

  return (
      <ul className="tags">
          <p className="tags__title">Popular Tags</p>
          {isResponse.tags.map(tag => (
              <li className="tag" key={tag}>
               <Link to={`/tags/${tag}`} className="tag__link" >{tag}</Link>
              </li>
          ))}
      </ul>
  )
};

export default PopularTags;
