import React from "react";

export default function Rectangel(props) {
  const styles = {
    btn: {
      cursor: "pointer"
    }
  };
  return (
    <div onClick={props.onClick}>
      <svg
        width="138"
        height="70"
        viewBox="0 0 138 70"
        style={styles.btn}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="138" height="70" fill={"#000"} rx="13" />
        <rect
          width="138"
          height="70"
          fill={props.color}
          rx="10"
          fillOpacity="0.9"
        />
        <rect width="138" height="60" fill={props.color} rx="10" />
        <text
          textAnchor="middle"
          x="50%"
          y="60%"
          fontSize="25"
          fontWeight="bold"
          fill={props.txtColor}
        >
          {props.name}
        </text>
      </svg>
      {/* <p style={styles.text}>{props.name}</p> */}
    </div>
  );
}
