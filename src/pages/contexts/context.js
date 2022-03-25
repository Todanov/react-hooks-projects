import React, { createContext, useReducer} from "react";

const intialState = {
    isLoading:false,
    isLogin:null,
    currentUser: null
}
const reducer = (state, action ) => {
    switch (action.type) {
        case 'LOADING':
         return {...state,isLoading:true}
         case 'SET_AUTHORIZE':
            return {
                ...state,
                isLogin:true,
                isLoading: false,
                currentUser:action.payload
            }
        case 'SET_UNSUTHORIZE':
            return {
                ...state,
                isLogin: false
            }
        default:
            return state
    }
}

export const CurrentUserContext = createContext()

export const CurrentUserProvider = ({children}) => {
    const value = useReducer(reducer, intialState)
    // const [state, setState] =useState({
    //     isLoading: false,
    //     isLogin: null,
    //     currentUser: null
    // })
    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}