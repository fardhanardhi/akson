import React, { Component } from "react";
import patterns from "svg-patterns";
import stringify from "virtual-dom-stringify";

export default class ShapeAndPattern extends Component {
  render() {
    const pattern = [
      patterns.lines({
        stroke: "#000000",
        background: "#9BDBA1"
        // orientations: [45]
      }),
      patterns.caps({
        stroke: "#000000",
        background: "#AB43AE"
        // orientations: [45]
      }),
      patterns.hexagons({
        stroke: "#000000",
        background: "#A54E1E"
        // orientations: [45]
      })
    ];

    const randProps = Math.floor(Math.random() * pattern.length);

    return (
      <div>
        <svg
          width="152"
          height="135"
          viewBox="0 0 152 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs
            dangerouslySetInnerHTML={{ __html: stringify(pattern[randProps]) }}
          />
          <path
            d="M76 0L151.344 134.25H0.655792L76 0Z"
            style={{ fill: pattern[randProps].url() }}
          />
        </svg>
      </div>
    );
  }
}
