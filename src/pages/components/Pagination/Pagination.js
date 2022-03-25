import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { range } from '../../utils/utils'

import './index.css'

const PaginationItem = ({page, url, currentPage}) => {
    const liClasses = classNames({
        pagination__item: true,
        active__link: currentPage === page
    })
  
    return (
        <li className={liClasses}>
            <Link className='pagination__link' to={`${url}/?page=${page}`}>{page}</Link>
        </li>
    )
}


const Pagination=({limit, total, url , currentPage}) => {
 
    const countPages = Math.ceil(total/limit)
    const pages =  range(1,countPages)
    return (
        <ul className='pagination'>
            {pages.map((page) =>(
            
                <PaginationItem 
                    page={page}
                    key={page}
                    url={url}
                    currentPage={currentPage}
                />
            ))}
        </ul>
    )
}



export default Pagination