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
      choices: [],
      pair : [],
      isClicked : null,
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
    this.getChoices();
  }

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
  };

  getObject = (objectId, colorId) => {
    const obj = [
      <Sphere color={colors[colorId].code} />,
      <Cone color={colors[colorId].code}/>,
      <UglyPyramid color={colors[colorId].code}/>,
      <Pyramid color={colors[colorId].code}/>,
      <Cylinder color={colors[colorId].code}/>,
      <Prism color={colors[colorId].code}/>,
      <Cube color={colors[colorId].code} />,
      <Cuboid color={colors[colorId].code}/>,
      <HexagonalPrism color={colors[colorId].code}/>
    ];
    return obj[objectId];
  };


  getChoices = () => {
    // generate pilihan jawaban benar
    let rightChoices = [...Array(3)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors),
        click : this.state.isClicked,
      };
    });

    // cek pilihan jawaban benar
    let rightChoicesNotPassed = true;
    while (rightChoicesNotPassed) {
      for (let i = 0; i < rightChoices.length; i++) {
        for (let j = 0; j < rightChoices.length; j++) {
          if (i !== j) {
            if (
              rightChoices[i].object === rightChoices[j].object &&
              rightChoices[i].color === rightChoices[j].color
            ) {
              rightChoices = rightChoices.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  color: this.getRandomId(colors),
                  click : this.state.isClicked,
                };
              });
            } else {
              rightChoicesNotPassed = false;
            }
          }
        }
      }
    }

    // duplikasi pilihan jawaban benar
    rightChoices = [...rightChoices, ...rightChoices];

    // generate pilihan jawaban salah
    let wrongChoices = [...Array(6)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors),
        click : this.state.isClicked,
      };
    });

    // cek pilihan jawaban benar
    let wrongChoicesNotPassed1 = true;
    let wrongChoicesNotPassed2 = true;
    while (wrongChoicesNotPassed1 || wrongChoicesNotPassed2) {
      for (let i = 0; i < rightChoices.length; i++) {
        for (let j = 0; j < rightChoices.length; j++) {
          if (i !== j) {
            if (
              rightChoices[i].object === wrongChoices[j].object &&
              rightChoices[i].color === wrongChoices[j].color
            ) {
              wrongChoices = wrongChoices.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  color: this.getRandomId(colors),
                  click : this.state.isClicked,
                };
              });
            } else {
              wrongChoicesNotPassed1 = false;
            }
          }
        }
      }
      for (let i = 0; i < wrongChoices.length; i++) {
        for (let j = 0; j < wrongChoices.length; j++) {
          if (i !== j) {
            if (
              wrongChoices[i].object === wrongChoices[j].object &&
              wrongChoices[i].color === wrongChoices[j].color
            ) {
              wrongChoices = wrongChoices.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  color: this.getRandomId(colors),
                  click : this.state.isClicked,
                };
              });
            } else {
              wrongChoicesNotPassed2 = false;
            }
          }
        }
      }
    }

    // penggabungan pilihan jawaban salah & benar
    let hasil = [...rightChoices, ...wrongChoices];

    // acak posisi pilihan jawaban
    const choices = [...hasil].sort(() => Math.random() - 0.5);

    this.setState({ choices });
  };

  checked = (index) => {
    console.log(this.state.choices[index].click);
    
    if (
        this.state.choices[index].click === false ||
        this.state.choices[index].click === null) {
      this.state.choices[index].click = true
      this.state.pair.push(index)

      if (this.state.pair.length > 2) {
        this.state.pair = [index];
        this.state.choices.click = false
      }
    }
    else if(this.state.choices[index].click === true){
      this.state.choices[index].click = false
    }
    console.log("ini objek ", this.state.choices[index]);  
    console.log("ini array pair ", this.state.pair);
    console.log("ini index ", index);
    
    
  }

  render() {
    return (
      <div className="container text-center m-0 p-0">
        <h2 style={styles.text}>Temukan objek yang berpasangan</h2>
        <div className="row">
          {this.state.choices.map((item, index) => {
            let component = null;
            if (index < 4) {
              component = (
                <div className="col-md-3" key={index} onClick={()=>this.checked(index)}>
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
              component = (
                <div className="col-md-3" key={index} onClick={()=>this.checked(index)}>
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
            if (index < 12 && index >= 8) {
              component = (
                <div className="col-md-3" key={index} onClick={()=>this.checked(index)}>
                  {this.getObject(item.object, item.color)}
                </div>
              );
            } else {
              component = null;
            }
            return component;
          })}
        </div>
      </div>
    );
  }
}

const styles = {
  text: {
    fontWeight: "normal",
    fontFamily: "Carter One",
    color: "#1D1D1D",
    marginBottom: "75px"
  },
 
}