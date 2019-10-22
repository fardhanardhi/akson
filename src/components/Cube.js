import React from 'react'

export default function Cube(props) {
  const styles={
    // pointer : {
      cursor: "pointer"
    // }
  }

  return (
    <div onClick={props.onClick}>
      <svg width="77" height="89" viewBox="0 0 77 89" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles}>
        <path d="M1 22.6958L38.5337 1L75.6334 22.6958L38.5337 44.1746L1 22.6958Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M38 44.6958L75.9676 23L75.5337 66.8254L38 88.5212V44.6958Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M38 44.6958L75.9676 23L75.5337 66.8254L38 88.5212V44.6958Z" fill="black" fillOpacity="0.15" />
        <path d="M38.3164 44.1744L0.999699 22.9126L1.42617 66.738L38.3164 87.9999V44.1744Z" fill={props.color} stroke="black" strokeWidth="0.5" />
      </svg>

    </div>
  )
}
