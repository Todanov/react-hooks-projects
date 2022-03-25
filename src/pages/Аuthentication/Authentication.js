import React, { useContext, useEffect, useState } from "react";
import { Link,useLocation, Navigate } from "react-router-dom";

import "./index.css";
import useFetch from "../components/hooks/useFetch";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { CurrentUserContext } from "../contexts/context";
import BoundaryErorr from "../components/BoundaryErorr/BoundaryErorr";

const Authentication = () => {
  let location = useLocation();
  const isLogin = location.pathname === "/login";
  const pageTitle = isLogin ? "Sing in" : "Sing Up";
  const descriptionLink = isLogin ? "/register" : "/login";
  const descriptionText = isLogin ? "Need an account?" : "Have an account?";
  const apiUrl = isLogin ? "/users/login" : "/users"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{isResponse, isLoading ,isErorr}, doFetch] = useFetch(apiUrl);
  const [username, setUserName] = useState('')
  const [isSucssecSubmiting, setIsSucssecSubmitig]=useState(false)
  const [, setToken] = useLocalStorage('token')
  const [, dispatch]=useContext(CurrentUserContext)


  
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data:", email, password);
    const user = isLogin ? {email , password} : {username, email ,password}
    doFetch({
      method: "POST",
      data: {
        user
      },
    });
  };
  useEffect(()=>{
      if(!isResponse){
        return 
      }
      setToken(isResponse.user.token)
      setIsSucssecSubmitig(true)
      dispatch({type: 'SET_AUTHORIZE', payload:isResponse.user})
    //   setCurrentUserState(state =>({
    //     ...state,
    //     isLoading:true,
    //     isLogin:true,
    //     currentUser: isResponse.user
    //  }))
  },[isResponse,setIsSucssecSubmitig,setToken, dispatch])
    
  if(isSucssecSubmiting){
      console.log('Navigate worl')
    return <Navigate replace to='/'/>
}

  return (
    <div className="auth__page">
      <div className="auth__page__container _container">
        <h1 className="auth__login">{pageTitle}</h1>
        <p>
          <Link to={descriptionLink}>{descriptionText}</Link>
        </p>
        <form onSubmit={handleSubmit} className="auth__form">
            {isErorr && (
                <BoundaryErorr onErorrs = {isErorr.errors} />
            )}
          {!isLogin && (
            <fieldset className="auth__filsed">
              <input
                type="text"
                className="auth__email"
                placeholder="Name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </fieldset>
          )}
          <fieldset className="auth__filsed">
            <input
              type="email"
              className="auth__email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="auth__filsed">
            <input
              type="password"
              className="auth__email"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="auth__btn">
            <button
              type="submit"
              className="auth__btn__container"
              disabled={isLoading}
            >
              Sing in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
