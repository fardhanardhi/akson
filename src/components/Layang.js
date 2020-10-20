import React from "react";

export default function Layang(props) {
  const styles={
    cursor: "pointer"
  }

  return (
    <div>
      <svg
        width="73"
        height="100"
        viewBox="0 0 73 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles}
      >
        <path d="M0 31L37 0L73 31L37 100L0 31Z" fill={props.color} />
      </svg>
    </div>
  );
}
