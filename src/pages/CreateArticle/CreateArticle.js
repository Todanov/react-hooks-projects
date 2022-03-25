import React, { useContext, useEffect, useState } from "react";
import ArticleForm from "../components/ArticalForm/ArticleForm";
import "./index.css";
import useFetch from "../components/hooks/useFetch";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/context";

const CreateArticle = () => {
  const apiUrl = "/articles";
  const [{ isResponse, isErrors }, doFetch] = useFetch(apiUrl);
const [isSuccessfullSubmiting, setIsSuccessFullSubmiting]=useState(false)
const [currentUserState]=useContext(CurrentUserContext)
  const initialValues = {
    title: "",
    description: "",
    body: "",
    tagList: [],
  };
  const errors = {};
  const handelSubmit = (article) => {
    doFetch({
      method: "POST",
      data: {
        article,
      },
    });
  };
  useEffect(()=> {
    if(!isResponse){
        return 
    }
    setIsSuccessFullSubmiting(true)
  },[isResponse])
  if(currentUserState.isLogin === false) {
      return <Navigate to='/'/>
  }
  if(isSuccessfullSubmiting){
      return <Navigate to={`articles/${isResponse.article.slug}`} />
  }
  return (
    <div className="createArticle">
      <ArticleForm
        isErrors={isErrors}
        initialValues={initialValues}
        onSubmit={handelSubmit}
        errors={errors}
      />
    </div>
  );
};

export default CreateArticle;
