import React, { Component } from "react";
import { Link } from "react-router-dom";

import Sphere from "../components/Sphere";
import Cone from "../components/Cone";
import UglyPyramid from "../components/UglyPyramid";
import Pyramid from "../components/Pyramid";
import Cylinder from "../components/Cylinder";
import Prism from "../components/Prism";
import Cuboid from "../components/Cuboid";
import Cube from "../components/Cube";
import HexagonalPrism from "../components/HexagonalPrism";

export default class GamePlay extends Component {
  state = {
    color: null
  };

  componentDidMount() {
    this.getRandomColor();
  }

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ color });
  };

  getRandomColors = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">GamePlay</Link>
            </li>
          </ul>
        </nav>
        <h2>Login</h2>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={this.getRandomColor}
        >
          Change Color
        </button>
        <Sphere color={this.getRandomColors()} />
        <Cone color={this.getRandomColors()} />
        <UglyPyramid color={this.getRandomColors()} />
        <Pyramid color={this.getRandomColors()} />
        <Cylinder color={this.getRandomColors()} />
        <Prism color={this.getRandomColors()} />
        <Cube color={this.getRandomColors()} />
        <Cuboid color={this.getRandomColors()} />
        <HexagonalPrism color={this.getRandomColors()} />
      </div>
    );
  }
}
