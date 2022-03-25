import React, { useEffect, useState } from 'react'
import BoundaryErorr from '../BoundaryErorr/BoundaryErorr'

import './index.css'
const ArticleForm =({onSubmit,isError, initialValues}) => {
    
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const [body, setBody]=useState('')
    const [tagList, setTagList] =useState('')
  const handleSubmitForm =(e)=>{
      e.preventDefault()
      const article ={
          title,
          description,
          body,
          tagList
      }

    onSubmit(article)
}
useEffect(()=> {
   if(!initialValues){
       return
   } 
   setTitle(initialValues.title)
   setDescription(initialValues.description)
   setBody(initialValues.body)
   setTagList(initialValues.tagList.join(' '))
}, [initialValues])
    return(
        <>
        <form type='form' onSubmit={handleSubmitForm} className='article__form'>
           {isError&& <BoundaryErorr onErorrs={isError} />}
            <fieldset className='article__form__fildset'>
                <input
                className='article__form__input'
                placeholder='Article Title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </fieldset>
            <fieldset className='article__form__fildset'>
                <input
                className='article__form__input'
                placeholder='What`s this article about?'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
            </fieldset>
            <fieldset className='article__form__fildset'>
                <textarea
                className='article__form__input _textarea' 
                placeholder='Write your article (in markdiwn)'
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                />
            </fieldset>
            <fieldset className='article__form__fildset'>
                <input
                className='article__form__input '
                placeholder='Enter tags'
                value={tagList}
                onChange={(e)=> setTagList(e.target.value)}
                />
            </fieldset>
            <button  className='article__publish' type='submit'>Publish Article</button>
        </form>
        </>
    )
}

export default ArticleForm