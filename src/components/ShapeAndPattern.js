import React, { Component } from "react";
import patterns from "svg-patterns";
import stringify from "virtual-dom-stringify";

import Circle from "../components/Circle";
import Rectangel from "../components/Rectangel";
import Stars from "../components/Stars";

import colors from "../assets/colors";

export default class ShapeAndPattern extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: []
    };

    this.objects = [<Circle />, <Rectangel />, <Stars />];
  }

  componentDidMount() {
    this.getChoices();
  }

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
  };

  getObject = (objectId) => {
    const pattern = [
      patterns.lines({
        stroke: "#000000",
        background: "#9BDBA1"
      }),
      patterns.lines({
        stroke: "#000000",
        background: "#2196f3"
      }),
      patterns.lines({
        stroke: "#000000",
        background: "#9e9e9e"
      }),

      patterns.caps({
        stroke: "#000000",
        background: "#A54E1E"
      }),
      patterns.caps({
        stroke: "#000000",
        background: "#ffeb3b"
      }),
      patterns.caps({
        stroke: "#000000",
        background: "#9e9e9e"
      }),


      patterns.hexagons({
        stroke: "#000000",
        background: "#9c27b0"
      }),
      patterns.hexagons({
        stroke: "#000000",
        background: "#f44336"
      }),
      patterns.hexagons({
        stroke: "#000000",
        background: "#9e9e9e"
      }),

      patterns.circles({
        stroke: "#000000",
        background: "#9c27b0"
      }),
      patterns.circles({
        stroke: "#000000",
        background: "#f44336"
      }),
      patterns.circles({
        stroke: "#000000",
        background: "#9e9e9e"
      }),
      
    ];

    const randProps = Math.floor(Math.random() * pattern.length);

    const obj = [
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
      </svg>,

      <svg
        width="141"
        height="133"
        viewBox="0 0 141 133"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs
          dangerouslySetInnerHTML={{ __html: stringify(pattern[randProps]) }}
        />
        <path
          d="M70.5 0L87.0018 50.7873H140.403L97.2004 82.1755L113.702 132.963L70.5 101.575L27.2978 132.963L43.7996 82.1755L0.597343 50.7873H53.9982L70.5 0Z"
          style={{ fill: pattern[randProps].url() }}
        />
      </svg>,

      <svg 
        width="131" 
        height="131" 
        viewBox="0 0 131 131" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="65.5" 
          cy="65.5" 
          r="65.5"
          style={{fill: pattern[randProps].url()}}
        />
        <defs
           dangerouslySetInnerHTML={{ __html: stringify(pattern[randProps]) }}
        />
      </svg> 
    ];
    return obj[objectId];
  };

  getChoices = () => {
    // generate pilihan jawaban benar

    let rightChoices = [...Array(3)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors)
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
                  color: this.getRandomId(colors)
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

    let wrongChoices = [...Array(6)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors)
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
                  color: this.getRandomId(colors)
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
                  color: this.getRandomId(colors)
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

  render() {
   
    return (
      <div className="container text-center m-0 p-0">
        <h2 style={styles.text}>Pattern</h2>
        <div className="row">
          {this.state.choices.map((item, index) => {
            let component = null;
            if (index < 4) {
              component = (
                <div className="col-md-3" key={index}>
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
                <div className="col-md-3" key={index}>
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
                <div className="col-md-3" key={index}>
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
  }
};
