import React from 'react'

export default function Cuboid(props) {
  return (
    <div>
      <svg width="93" height="90" viewBox="0 0 93 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6211 54.2692V89.4197L92.5003 54.088V18.7563L31.6211 54.2692Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M31 54.5129V89.6634L91.8792 54.3317V19L31 54.5129Z" fill="black" fillOpacity="0.15" />
        <path d="M1 36.3317L62.0604 1L92.5 18.7564L31.4396 54.2693L1 36.3317Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M1 72.0258V36.3318L31.4396 54.2694V89.4199L1 72.0258Z" fill={props.color} stroke="black" strokeWidth="0.5" />
      </svg>

    </div>
  )
}
