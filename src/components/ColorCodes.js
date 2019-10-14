import React, { Component } from "react";

import Rectangel from "../components/Rectangel";
import Love from "../components/Love";

import colors from "../assets/colors";

export default class ColorCodes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: [],
      trueId: []
    };

    this.objects = [<Rectangel />];
  }

  componentDidMount() {
    const choices = [...Array(4)].map(x => {
      // var sorted_arr = .slice().sort();
      var results = [];

      for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
          results.push(sorted_arr[i]);
        }
      }
      return {
        object: this.getRandomId(this.objects)
        // color : results,
        // name : results,
      };
    });

    // return ({
    //     object: this.getRandomId(this.objects),
    //     color: this.getRandomId(colors),
    //     name : this.getRandomId(colors)
    // })
    this.setState({ choices }, () => console.log(this.state.choices));
  }

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
  };

  getTrueId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return this.state.trueId.push(id);
  };

  randColor = (objectId, colorIdCode, colorIdName) => {
    const obj = [
      <Rectangel
        color={colors[colorIdCode].code}
        name={colors[colorIdName].name}
      />
    ];
    return obj[objectId];
  };

  render() {
    return (
      <div className="container text-center m-0 p-0">
        <div className="row">
          {this.state.choices.map((item, index) => {
            if (index < 4) {
              return (
                <div className="col-md-3">
                  {this.randColor(item.object, item.color, item.name)}
                </div>
              );
            }
          })}
        </div>
        <div className="row mt-5">
          {this.state.choices.map((item, index) => {
            if (index < 8 && index >= 4) {
              return (
                <div className="col-md-3">
                  {this.randColor(item.object, item.color, item.name)}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
