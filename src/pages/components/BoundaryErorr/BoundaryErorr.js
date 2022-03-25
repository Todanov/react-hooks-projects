import React from 'react'

import './index.css'
const BoundaryErorr = ({onErorrs}) => {
    const messageBoundary = Object.keys(onErorrs).map(name => {
        const message = onErorrs[name].join(' ')
        return `${name}: ${message}`
    })

    return(
        <ul >
            {messageBoundary.map((erorr)=>(
                <li className='erorrs' key={erorr} >{erorr}</li>
            ))}
        </ul>
    )
}

export default BoundaryErorr