import React,{useState} from 'react'

import './index.css'
const Btn = () => {
    const [follow, setFollow]=useState('+')
    console.log(follow)

    return (
            <div >
                <input
                    className='folllow'
                    value={follow}
                    type='button'
                    onClick={()=>setFollow( follow === '+' ? '-' : '+')}
                />
        </div>
    )
}

export default Btn