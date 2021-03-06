import { parse } from "query-string"

export const range =(start, end)=>{
    return [...Array(end).keys()].map(item => item + start)
}


export const limit =10

export const getPagination = ({search}) =>{
    const parsedSearch = parse(search)
    const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1
    const offset  = currentPage *10 - limit
    return {currentPage, offset}
}