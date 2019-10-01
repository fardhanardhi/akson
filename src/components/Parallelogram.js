import React from 'react'

export default function Parallelogram(props){
    return(
        <div>
            <svg width="270" height="80" viewBox="0 0 270 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 79.5L57.5 0H270L215.5 79.5H0Z" fill={props.color}/>
            </svg>
        </div>
    )
}