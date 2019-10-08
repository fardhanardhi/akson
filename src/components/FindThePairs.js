import React, { Component } from "react";

import Sphere from "../components/Sphere";
import Cone from "../components/Cone";
import UglyPyramid from "../components/UglyPyramid";
import Pyramid from "../components/Pyramid";
import Cylinder from "../components/Cylinder";
import Prism from "../components/Prism";
import Cuboid from "../components/Cuboid";
import Cube from "../components/Cube";
import HexagonalPrism from "../components/HexagonalPrism";

import colors from "../assets/colors";

export default class FindThePairs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: []
    };

    this.objects = [
      <Sphere />,
      <Cone />,
      <UglyPyramid />,
      <Pyramid />,
      <Cylinder />,
      <Prism />,
      <Cube />,
      <Cuboid />,
      <HexagonalPrism />
    ];
  }

  componentDidMount() {
    const choices = [...Array(12)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors)
      };
    });

    this.setState({ choices }, () => console.log(this.state.choices));
  }

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
  };

  getObject = (objectId, colorId) => {
    const obj = [
      <Sphere color={colors[colorId].code} />,
      <Cone color={colors[colorId].code} />,
      <UglyPyramid color={colors[colorId].code} />,
      <Pyramid color={colors[colorId].code} />,
      <Cylinder color={colors[colorId].code} />,
      <Prism color={colors[colorId].code} />,
      <Cube color={colors[colorId].code} />,
      <Cuboid color={colors[colorId].code} />,
      <HexagonalPrism color={colors[colorId].code} />
    ];
    return obj[objectId];
  };

  render() {
    return (
      <div className="container text-center m-0 p-0">
        <div className="row">
          {this.state.choices.map((item, index) => {
            let component = null;
            if (index < 4) {
              component = (
                <div className="col-md-3">
                  {this.getObject(item.object, item.color)}
                </div>
              );
            } else {
              component = null;
            }
            return component;
          })}
        </div>
        <div className="row mt-5">
          {this.state.choices.map((item, index) => {
            let component = null;

            if (index < 8 && index >= 4) {
              
                component = (<div className="col-md-3">
                {this.getObject(item.object, item.color)}
              </div>
              );
            }
            else{
              component = null;
            }  
            return component;
          })}
        </div>
        <div className="row mt-5">
          {this.state.choices.map((item, index) => {
            let component = null;
            if (index < 12 && index >= 8) {
              component =
                (<div className="col-md-3">
                  {this.getObject(item.object, item.color)}
                </div>
              );
            }
            else{
              component = null;
            }
            return component;
          })}
        </div>
      </div>
    );
  }
}
