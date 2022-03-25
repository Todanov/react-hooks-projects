import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Btn from "../components/Btn/Btn";
import CounterLike from "../components/CounterLike/CounterLike";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import useFetch from "../components/hooks/useFetch";
import Loading from "../components/Loading/Loading";
import Tags from "../components/Tags/Tags";
import User from "../components/User/User";

import "./index.css";
const Article = () => {
  let { slug } = useParams();
  const apiUrl = `/articles/${slug}`;
  const [{ isResponse, isLoading, isErorr }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  return (
    <>
      <div className="article__container">
        <div className="article__page _container">
          <div className="article__info__page ">
            {!isLoading && isResponse && (
              <div className="title ">
                <h1 className="title__name">{isResponse.article.title}</h1>
                <div className="title__info__article">
                  <User article={isResponse.article} />
                  <div className="title__btns">
                    <Btn />
                    <CounterLike />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="article__main _container">
        {isLoading && <Loading />}
        {isErorr && <ErrorBoundary />}
        {!isLoading && isResponse && (
          <div className="article__header">
              <div className="article__main__title">{isResponse.article.body}</div>
              <Tags  tagList={isResponse.article.tagList}/>
          </div>

        )}
      </div>
    </>
  );
};

export default Article;
