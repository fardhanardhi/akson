import React from'react'

export default function Rectangel(props){
    const styles = {
        text:{
            position : "absolute",
            fontSize : "1.5vw",
            color : "#FAFAFA",
            top : "33px",
            marginLeft : "69px",
            cursor: "pointer"
        },
        btn:{
            cursor: "pointer"
        }
    }
    
    return(
        <div onClick={props.onClick}>  
            <svg width="138" height="70" viewBox="0 0 138 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="138" height="70" fill={props.color} style={styles.btn} />
            </svg>
            <p style={styles.text}>{props.name}</p>
        </div>
    )
}