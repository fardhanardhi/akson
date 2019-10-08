import React from'react'

export default function Rectangel(props){
    return(
        <div>  
            <svg width="138" height="70" viewBox="0 0 138 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="138" height="70" fill={props.color}/>
            </svg>
        </div>
    )
}