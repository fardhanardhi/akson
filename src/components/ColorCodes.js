import React, { Component } from "react";

import Rectangel from "../components/Rectangel";

import colors from "../assets/colors";

export default class ColorCodes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: []
    };

    this.objects = [<Rectangel />];
  }

  componentDidMount() {
    this.getChoices();
  }

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
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

  getChoices = () => {
    // generate pilihan jawaban yang benar
    let rightAnswer = [...Array(3)].map(x => {
      return {
        object : this.getRandomId(this.objects),
        color : this.getRandomId(colors),
        name : this.getRandomId(colors)
      }
    })

    // mendapatkan jawaban benar
    let rightChoicesNotPassed = true
    while (rightChoicesNotPassed) {
      for (let i = 0; i < rightAnswer.length; i++) {
        for (let i = 0; i < rightAnswer.length; i++) {
            if (
              rightAnswer[i].name === rightAnswer[j].color
            ) {
              rightAnswer = rightAnswer.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  color: this.getRandomId(colors),
                  name: this.getRandomId(colors)
                };
              });
            } else {
              rightChoicesNotPassed = false;
            }
          }
      }
    }

    // menggandakan jawaban benar
    rightAnswer = [...rightAnswer, ...rightAnswer];

    // generate pilihan jawaban yang salah
    let wrongAnswer = [...Array(4)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors),
        name: this.getRandomId(colors)
      };
    });

    //Membandingkan jawaban benar dengan jawaban salah
    let wrongChoicesNotPassed1 = true;
    let wrongChoicesNotPassed2 = true;
    while (wrongChoicesNotPassed1 || wrongChoicesNotPassed2) {
      for (let i = 0; i < rightAnswer.length; i++) {
        for (let j = 0; j < rightAnswer.length; j++) {
          if (i !== j) {
            if (
              rightAnswer[i].name === wrongAnswer[j].name &&
              rightAnswer[i].color === wrongAnswer[j].color
            ) {
              wrongAnswer = wrongAnswer.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  color: this.getRandomId(colors),
                  name: this.getRandomId(colors)
                };
              });
            } else {
              wrongChoicesNotPassed1 = false;
            }
          }
        }
      }

      //Mendapatkan jawaban salah
      for (let i = 0; i < wrongAnswer.length; i++) {
        for (let j = 0; j < wrongAnswer.length; j++) {
          if (i !== j) {
            if (
              wrongAnswer[i].name === wrongAnswer[j].name &&
              wrongAnswer[i].color === wrongAnswer[j].color
            ) {
              wrongAnswer = wrongAnswer.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  color: this.getRandomId(colors),
                  name: this.getRandomId(colors)
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
     let hasil = [...rightAnswer, ...wrongAnswer];

     // acak posisi pilihan jawaban
    const choices = [...hasil].sort(() => Math.random() - 0.5);

    this.setState({ choices });
    console.log("hasil benar", rightAnswer);
    console.log("hasil salah", wrongAnswer);
    console.log("hasil", hasil);
    
    
    
  }

  render() {
    return (
      <div className="container text-center m-0 p-0">
        <div className="row">
          {this.state.choices.map((item, index) => {
            let component;
            if (index < 4) {
              component = (
                <div className="col-md-3">
                  {this.randColor(item.object, item.color, item.name)}
                </div>
              );
            }
            return component;
          })}
        </div>
        <div className="row mt-5">
          {this.state.choices.map((item, index) => {
            let component;
            if (index < 8 && index >= 4) {
              component = (
                <div className="col-md-3">
                  {this.randColor(item.object, item.color, item.name)}
                </div>
              );
            }
            return component;
          })}
        </div>
      </div>
    );
  }
}
