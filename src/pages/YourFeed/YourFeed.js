import React, {useEffect} from 'react'

import './index.css'
import useFetch from '../components/hooks/useFetch'
import Feed from '../components/Feed/Feed'
import Pagination from '../components/Pagination/Pagination'
import { useLocation } from 'react-router-dom'
import { getPagination,limit} from '../utils/utils'
import { stringify } from 'query-string'
import PopularTags from '../components/PopularTags/PopularTags'
import Loading from '../components/Loading/Loading'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import ToggleFeed from '../components/ToggleFeed/ToggelFeed'

const YourFeed = () => {
    let location = useLocation()
    console.log(location)
    const {offset, currentPage} = getPagination(location.search)
    const stringifieldParams = stringify({
        limit,
        offset
    })
    const apiUrl =`/articles/feed?${stringifieldParams}`

    const [{isResponse, isLoading, isErorr}, doFetch]=useFetch(apiUrl)
    const url = location.pathname
    console.log(isResponse)

    useEffect(()=>{
        doFetch()
    },[doFetch,currentPage])
    return (
        <div className='wrapper'>
            <div className='wrapper__banner'>
                <h1>Medium clone Hooks</h1>
                <span> A place to share your knowledge.</span>
            </div>
            <div className='wrapper__container _container'>
                <div className='global__feed'>
                   <div><ToggleFeed/></div> 
                    <div>
                        {isLoading &&  (<Loading/> ) }
                        {isErorr && (<ErrorBoundary/>)}
                        {isResponse === null && <div>Your not new paper</div>}
                        {!isLoading && isResponse && (
                        <>
                           <Feed articles = {isResponse.articles}/> 
                           <Pagination total={500} limit={10} url={url} currentPage={currentPage} />
                        </>)}
                    </div>
                </div>
                <div className='popular__tags'><PopularTags/></div>
            </div>
        </div>
    )
}

export default YourFeed