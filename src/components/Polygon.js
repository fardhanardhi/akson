import React from 'react'

export default function(props){
    return(
        <div>
            <svg 
            width="152" 
            height="135" 
            viewBox="0 0 152 135" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
                <path d="M76 0L151.344 134.25H0.655792L76 0Z" fill={props.color}/>
                {/* <defs dangerouslySetInnerHTML={{ __html: stringify(pattern) }} /> */}

            </svg>
        </div>
    )
}