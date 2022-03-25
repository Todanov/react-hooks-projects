import React,{useState} from 'react'

import './index.css'
const CounterLike = () => {
    const [follow, setFollow]=useState('-')
    console.log(follow)

    return (
            <div >
                <input
                className='like'
                    value={follow}
                    type='button'
                    onClick={()=>setFollow(follow === '+' ? '-' : "+")}
                />
        </div>
    )
}

export default CounterLike