import React from'react'

export default function Rectangel(props){
    const styles = {   
        btn:{
            cursor: "pointer"
        }
    }
    return(
        <div onClick={props.onClick}>  
            <svg width="138" height="70" viewBox="0 0 138 70"  style={styles.btn} fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="138" height="70" fill={props.color} />
                <text textAnchor="middle" x="50%" y="55%" fill="#F0F0F0">{props.name}</text>
            </svg>
            {/* <p style={styles.text}>{props.name}</p> */}
        </div>
    )
}