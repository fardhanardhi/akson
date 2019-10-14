import React from'react'

export default function Rectangel(props){
    const style = {
        position : "absolute",
        fontSize : "1.5em",
        color : "#FAFAFA",
        top : "17px",
        left : "0",
        right : "0"
    }
    return(
        <div>  
            <svg width="138" height="70" viewBox="0 0 138 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="138" height="70" fill={props.color}/>
            </svg>
            <p style={style}>{props.name}</p>
        </div>
    )
}