import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/context";

import CustomLink from "./CustomLink";

import "./index.css";

const Layout = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <>
      <div className="header _container">
        <div className="header__link">Medium</div>
        <nav className="nav">
          <ul className="header__nav">
            <li className="header__nav__link">
              <CustomLink to="/">Home</CustomLink>
            </li>
            {currentUserState.isLogin === false && (
              <>
                <li>
                  <CustomLink to="/login">Sing in</CustomLink>
                </li>
                <li>
                  <CustomLink to="/register">Sing Up</CustomLink>
                </li>
              </>
            )}
            {currentUserState.isLogin === true && (
              <>
                <li>
                  <CustomLink to="/articles/new">New Post</CustomLink>
                </li>
                <li >
                  <CustomLink className="header__link"
                    to={`/profiles/${currentUserState.currentUser.username}`}
                  >
                    <img className="avatar" src={currentUserState.currentUser.image} alt=''/>
                    &nbsp;
                    {currentUserState.currentUser.username}
                  </CustomLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
