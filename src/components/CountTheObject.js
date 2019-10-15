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
      ],

      soal: [
        {
          image: Animal,
          pertanyaan: [
            {
              text: "berapa jumlah hewan yang ada?",
              pilihanJawaban: [
                {
                  text: "17",
                  isBenar: true
                },
                {
                  text: "15",
                  isBenar: false
                },
                {
                  text: "19",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah bebek berwarna coklat?",
              pilihanJawaban: [
                {
                  text: "4",
                  isBenar: true
                },
                {
                  text: "3",
                  isBenar: false
                },
                {
                  text: "2",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Animal2,
          pertanyaan: [
            {
              text: "berapa jumlah hewan yang ada?",
              pilihanJawaban: [
                {
                  text: "17",
                  isBenar: true
                },
                {
                  text: "15",
                  isBenar: false
                },
                {
                  text: "19",
                  isBenar: false
                }
              ]
            },
          ]
        }
        
      ]
    };
  }

  getRandomImage = ArImg => {
    var num = Math.floor(Math.random() * ArImg.length);
    var img = ArImg[num];
    return img;
  };

  // pertanyaan = TanyaGambar =>{

  // }

  render() {
    return (
      <div className="container-fluid">
        
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8">
            <img
              src={Animal}
              alt="countImage"
              style={style.imageStyle}
            />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

const style = {
  imageStyle: {
    maxHeight: "500px",
    maxWidth: "500px",
    align: "center",
    margin: "auto"
  }
};
