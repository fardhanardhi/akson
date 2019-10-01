import React from 'react'

export default function Hexagon(props){
    return(
        <div>
            <svg width="89" height="107" viewBox="0 0 89 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M89 26.9029L44.8069 0L0 26.9029V80.0971L44.8069 107L89 80.0971V26.9029Z" fill={props.color}/>
            </svg> 
        </div>
    )
}