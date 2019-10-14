import React from "react";

export default function UglyPyramid(props) {
  return (
    <div>
      <svg
        width="67"
        height="89"
        viewBox="0 0 67 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.7168 88L30.9817 1L65.9897 61.1375L19.7168 88Z"
          fill={props.color}
          stroke="black"
          strokeWidth="0.5"
        />
        <path
          d="M19.5442 88L30.9824 1.17334L1.00035 52.4721L19.5442 88Z"
          fill={props.color}
          stroke="black"
          strokeWidth="0.5"
        />
        <path
          d="M19.7168 88L30.9817 1L65.9897 61.1375L19.7168 88Z"
          fill="black"
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
}
