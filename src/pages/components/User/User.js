import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'
const User = ({article}) => {
    return (
        <div className="article__user">
        <div className="article__user__image">
          <Link style={{color:'white'}} to={`/profiles/${article.author.username}`}>
            <img className="article__image" src={article.author.image} alt="" />
          </Link>
        </div>
        <div className="article__name">
          <Link to={`/profiles/${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="article__data">{article.createdAt}</span>
        </div>
        </div>
    )
}

export default User