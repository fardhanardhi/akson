import React from 'react'

export default function Circle(props){
    return(
       <div>
            <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="65.5" cy="65.5" r="65.5" fill={props.color}/>
            </svg>
       </div> 
    )
}