import React from 'react';

export default function Stars(props){
    return(
        <div>
            <svg width="141" height="133" viewBox="0 0 141 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.5 0L87.0018 50.7873H140.403L97.2004 82.1755L113.702 132.963L70.5 101.575L27.2978 132.963L43.7996 82.1755L0.597343 50.7873H53.9982L70.5 0Z" fill={props.color}/>
            </svg>
        </div>
    )
}