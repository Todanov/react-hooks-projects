import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Article from '../Article/Article.js'
import Layout from '../components/TopBar/TopBar'
import CreateArticle from '../CreateArticle/CreateArticle.js'
import GlobalFeed from '../GlobalFeed/GlobalFeed'
import NotPage from '../NotPage'
import TagName from '../TagName/TagName'
import YourFeed from '../YourFeed/YourFeed'
import Authentication from '../Аuthentication/Authentication'


const Routings = () => {
    return (
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<GlobalFeed/>}/>
              <Route path="/articles/new" element={<CreateArticle/>}/>
              <Route path='/feed' element={<YourFeed/>}/>
              <Route path='/articles/:slug' element={<Article/>}/>
              <Route path='/tags/:slug' element={<TagName/>}/>
              <Route path='/register' element={<Authentication/>} />
              <Route path='/login' element={<Authentication/>} />
              <Route path='*' element={<NotPage />}/>
              </Route>
        </Routes>
    )
}
export default Routings
