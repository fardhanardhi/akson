import React from'react'

export default function Rectangel(props){
    return(
        <div>   
            <svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="129" height="129" fill={props.color}/>
            </svg>
        </div>
    )
}