import React from "react";

export default function Sphere(props) {
  return (
    <div>
      <svg
        width="87"
        height="87"
        viewBox="0 0 87 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M86.75 43.5C86.75 67.3863 67.3863 86.75 43.5 86.75C19.6137 86.75 0.25 67.3863 0.25 43.5C0.25 19.6137 19.6137 0.25 43.5 0.25C67.3863 0.25 86.75 19.6137 86.75 43.5Z"
          fill={props.color}
          stroke="black"
          stroke-width="0.5"
        />
        <path
          d="M87 43.5C87 67.5244 67.5244 87 43.5 87C19.4756 87 0 67.5244 0 43.5C0 19.4756 19.4756 0 43.5 0C67.5244 0 87 19.4756 87 43.5Z"
          fill="url(#paint0_linear)"
          fill-opacity="0.3"
        />
        <ellipse
          cx="18.3224"
          cy="21.9242"
          rx="4.97388"
          ry="10.1896"
          transform="rotate(28.7573 18.3224 21.9242)"
          fill="white"
          fill-opacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="87"
            y1="43.5"
            x2="3.18293"
            y2="43.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-color={props.color} stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
