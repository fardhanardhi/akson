import React from 'react'

export default function HexagonalPrism(props) {
  return (
    <div>
      <svg width="102" height="88" viewBox="0 0 102 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.1097 46.6204L11.7666 35.1241L70.7082 1L90.4162 12.6788L31.1097 46.6204Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M31.3431 46.6204L12 35.1241L70.9416 1L90.6496 12.6788L31.3431 46.6204Z" fill="black" fillOpacity="0.15" />
        <path d="M41.8758 72.8978L31.1094 46.6205L90.7809 12.8613L100.817 38.7737L41.8758 72.8978Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M31.8398 87.4963L41.6939 72.8978L101 38.7737L90.7814 53.0073L31.8398 87.4963Z" fill={props.color} stroke="black" strokeWidth="0.5" />
        <path d="M32 87.7226L41.854 73.1241L101.161 39L90.9416 53.2336L32 87.7226Z" fill="black" fillOpacity="0.15" />
        <path d="M31.1095 46.6204L11.5839 35.124L1 49.7226L11.219 75.9999L31.6569 87.4963L41.8759 72.8978L31.1095 46.6204Z" fill={props.color} stroke="black" strokeWidth="0.5" />
      </svg>
    </div>
  )
}
