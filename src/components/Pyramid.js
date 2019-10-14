import React from 'react'

export default function Pyramid(props) {
  return (
    <div>
      <svg width="83" height="90" viewBox="0 0 83 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.5869 88.602V1L81.9904 65.8292L41.5869 88.602Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M41 88.602V1L81.4035 65.8292L41 88.602Z" fill="black" fillOpacity="0.15" />
        <path d="M41.4033 88.4184V1L0.999863 65.6933L41.4033 88.4184Z" fill={props.color} stroke="black" strokeWidth="0.5" />
      </svg>

    </div>
  )
}
