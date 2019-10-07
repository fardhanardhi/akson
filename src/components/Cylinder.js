import React from 'react'

export default function Cylinder(props) {
  return (
    <div>
      <svg width="110" height="92" viewBox="0 0 110 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M103.518 47.4154C110.702 42.9661 110.86 29.3918 103.788 16.7835C96.6028 3.97391 84.6767 -2.98793 77.1499 1.23381C77.0071 1.31391 76.8669 1.39746 76.7293 1.48439L13.8682 37.146L40.5259 83.999L103.535 47.4456L103.518 47.4154Z" />
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M103.518 47.4154C110.702 42.9661 110.86 29.3918 103.788 16.7835C96.6028 3.97391 84.6767 -2.98793 77.1499 1.23381C77.0071 1.31391 76.8669 1.39746 76.7293 1.48439L13.8682 37.146L40.5259 83.999L103.535 47.4456L103.518 47.4154Z" fill={props.color} />
        <path d="M103.788 16.7835L104.224 16.5389L103.788 16.7835ZM103.518 47.4154L103.255 46.9903L102.842 47.2459L103.085 47.6659L103.518 47.4154ZM77.1499 1.23381L77.3945 1.6699V1.66989L77.1499 1.23381ZM76.7293 1.48439L76.976 1.91928L76.9863 1.91343L76.9963 1.90709L76.7293 1.48439ZM13.8682 37.146L13.6214 36.7111L13.186 36.9581L13.4336 37.3932L13.8682 37.146ZM40.5259 83.999L40.0914 84.2463L40.3407 84.6845L40.7768 84.4315L40.5259 83.999ZM103.535 47.4456L103.786 47.8781L104.218 47.6274L103.968 47.195L103.535 47.4456ZM103.352 17.0281C106.852 23.2692 108.551 29.7296 108.499 35.1543C108.446 40.5928 106.641 44.8928 103.255 46.9903L103.781 47.8405C107.578 45.4888 109.444 40.7769 109.499 35.1639C109.553 29.537 107.795 22.9062 104.224 16.5389L103.352 17.0281ZM77.3945 1.66989C80.94 -0.318754 85.6023 0.285228 90.3449 3.05372C95.0759 5.8154 99.795 10.6872 103.352 17.0281L104.224 16.5389C100.595 10.0702 95.7591 5.0563 90.8491 2.1901C85.9507 -0.669297 80.8866 -1.43537 76.9053 0.79772L77.3945 1.66989ZM76.9963 1.90709C77.1266 1.82481 77.2593 1.74572 77.3945 1.6699L76.9053 0.79772C76.7548 0.882092 76.6072 0.970108 76.4622 1.06169L76.9963 1.90709ZM76.4826 1.0495L13.6214 36.7111L14.1149 37.5809L76.976 1.91928L76.4826 1.0495ZM13.4336 37.3932L40.0914 84.2463L40.9605 83.7518L14.3027 36.8987L13.4336 37.3932ZM40.7768 84.4315L103.786 47.8781L103.284 47.0131L40.275 83.5666L40.7768 84.4315ZM103.968 47.195L103.95 47.1649L103.085 47.6659L103.103 47.6961L103.968 47.195Z" fill="black" mask="url(#path-1-inside-1)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M103.65 47.4154C110.834 42.9661 110.991 29.3918 103.919 16.7835C96.7347 3.97391 84.8085 -2.98793 77.2817 1.23381C77.1389 1.31391 76.9987 1.39746 76.8611 1.48439L14 37.146L40.6578 83.999L103.667 47.4456L103.65 47.4154Z" fill="black" fill-opacity="0.15" />
        <path d="M40.2365 53.2339C43.8633 59.7 45.6222 66.395 45.5449 71.9849C45.4675 77.5824 43.5541 82.0183 39.9012 84.0672C36.2484 86.1161 31.4654 85.436 26.6486 82.5837C21.8383 79.7352 17.0423 74.7437 13.4155 68.2776C9.78877 61.8115 8.02985 55.1165 8.10714 49.5265C8.18453 43.9291 10.0979 39.4932 13.7508 37.4443C17.4037 35.3954 22.1867 36.0754 27.0034 38.9278C31.8138 41.7763 36.6097 46.7678 40.2365 53.2339Z" fill={props.color} stroke="black" stroke-width="0.5" />
      </svg>

    </div>
  )
}