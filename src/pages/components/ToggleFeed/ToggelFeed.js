import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/context";
import CustomLink from "../TopBar/CustomLink";

import "./index.css";

const ToggleFeed = ({ tagName }) => {
  const [{ isLogin }] = useContext(CurrentUserContext);

  return (
    <div className="toggle">
      <ul className="toggle__names">
        {isLogin && (
          <li className="toggle__item">
            <CustomLink to="/feed">Your Feed</CustomLink>
          </li>
        )}

        <li className="toggle__item">
          <CustomLink to="/">Global Feed</CustomLink>
        </li>
        {tagName && (
          <li className="toggle__item">
            <CustomLink to={`/tags/${tagName}`}>{`# ${tagName}`}</CustomLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ToggleFeed;
