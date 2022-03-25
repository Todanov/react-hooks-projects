import React, {  useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { CurrentUserContext } from '../../contexts/context';
import useLocalStorage from '../hooks/useLocalStorage';
const CurrentUserCheker = ({children}) => {
    const [{isResponse},doFetch] = useFetch('/user')
    const [, dispatch]=useContext(CurrentUserContext)
    const [token] =useLocalStorage('token')
    useEffect(()=>{
        if(!token){
            dispatch({
                type: 'SET_UNSUTHORIZE'
            })
            // setCurrentUserState(state=>({
            //     ...state,
            //     isLogin: false
            // }))
            return 
        }
        console.log('init')
        doFetch()
        dispatch({type: 'LOADING'})
        // setCurrentUserState((state)=>({
        //     ...state,
        //     isLoading: true,
        // }))
    },[doFetch, dispatch,token])
    useEffect(()=>{
        if(!isResponse){
            return
        }
        dispatch({type:'SET_AUTHORIZE', payload: isResponse.user})
        // setCurrentUserState(state => ({
        //     ...state,
        //     isLoading:true,
        //     isLogin:true,
        //     currentUser:isResponse.user
        // }))
    },[isResponse,dispatch])
    return (
        <div>
            {children}
        </div>
    );
}

export default CurrentUserCheker;