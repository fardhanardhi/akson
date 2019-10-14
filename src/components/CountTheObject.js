import React, { Component } from "react";
import Animal from "../assets/imgCount/Animal.svg";
import Animal2 from "../assets/imgCount/Animal2.svg";
import Apple from "../assets/imgCount/Apples.svg";
import Apple2 from "../assets/imgCount/Apples2.svg";
import Apple3 from "../assets/imgCount/Apples3.svg";
import Duck from "../assets/imgCount/Ducks.svg";
import Duck2 from "../assets/imgCount/Ducks2.svg";
import Monkey from "../assets/imgCount/Monkey.svg";
import Mushroom from "../assets/imgCount/Mushroom.svg";
import Sunflower from "../assets/imgCount/Sunflower.svg";
import Sunflower2 from "../assets/imgCount/Sunflower2.svg";
import Sunflower3 from "../assets/imgCount/Sunflower3.svg";
import Turtles from "../assets/imgCount/Turtles.svg";
import Turtles2 from "../assets/imgCount/Turtles2.svg";

export default class CountTheObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayImg: [
        Animal,
        Animal2,
        Apple,
        Apple2,
        Apple3,
        Duck,
        Duck2,
        Monkey,
        Mushroom,
        Sunflower,
        Sunflower2,
        Sunflower3,
        Turtles,
        Turtles2
      ]
    };
  }

  getRandomImage = ArImg => {
    var num = Math.floor(Math.random() * ArImg.length);
    var img = ArImg[num];
    return img;
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <img src={this.getRandomImage(this.state.arrayImg)} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
