import React, { Component, Fragment } from "react";

import Rectangel from "../components/Rectangel";

import colors from "../assets/colors";
import GameHeader from "./GameHeader";

export default class ColorCodes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: [],
      isCorrect: false,
      rightChoicesCount: 0
    };

    this.objects = [<Rectangel />];
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate() {
    console.log(this.state.choices);
  }

  reload = () => {
    this.getChoices();
    this.setState({
      isCorrect: false,
      rightChoicesCount: 0
    });
  };

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
  };

  getColor = (objectId, colorIdCode, colorIdName) => {
    const obj = [
      <Rectangel
        color={colors[colorIdCode].code}
        name={colors[colorIdName].name}
        txtColor={
          colorIdCode === 4 ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.75)"
        }
      />
    ];
    return obj[objectId];
  };

  checked = (index, colorIdName, colorIdCode) => {
    let choicesUpdate = this.state.choices;
    choicesUpdate[index] = {
      object: this.state.choices[index].object,
      color: this.state.choices[index].color,
      name: this.state.choices[index].name,
      isCorrect: colorIdName === colorIdCode ? true : false
    };
    this.setState({
      choices: choicesUpdate,
      ...this.state
    });

    if (choicesUpdate[index].isCorrect === true) {
      if (this.props.gameInfo != null) {
        this.props.addScore();
      }
      console.log("benar");
      this.setState(
        {
          rightChoicesCount: this.state.rightChoicesCount + 1
        },
        () => {
          if (this.state.rightChoicesCount === 2) {
            this.reload();
          }
        }
      );
    } else {
      if (this.props.gameInfo != null) {
        this.props.addWrongScore();
      }
      console.log("salah");
    }
  };

  getChoices = () => {
    // generate pilihan jawaban yang benar

    let rightAnswer = [...Array(2)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors),
        name: this.getRandomId(colors),
        isCorrect: this.state.isCorrect
      };
    });

    // mendapatkan jawaban benar
    let rightChoicesNotPassed = true;

    while (rightChoicesNotPassed) {
      for (let i = 0; i < rightAnswer.length; i++) {
        for (let j = 0; j < rightAnswer.length; j++) {
          if (
            rightAnswer[i].name === rightAnswer[j].name &&
            rightAnswer[i].color === rightAnswer[j].color
          ) {
            rightAnswer = rightAnswer.map(x => {
              let randColor = this.getRandomId(colors);
              return {
                object: this.getRandomId(this.objects),
                color: randColor,
                name: randColor,
                isCorrect: this.state.isCorrect
              };
            });
          } else {
            rightChoicesNotPassed = false;
          }
        }
      }
    }

    // generate pilihan jawaban yang salah
    // let getWrongColor
    let wrongAnswer = [...Array(6)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors),
        name: this.getRandomId(colors),
        isCorrect: this.state.isCorrect
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
                  name: this.getRandomId(colors),
                  isCorrect: this.state.isCorrect
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
        if (wrongAnswer[i].name === wrongAnswer[i].color) {
          wrongAnswer = wrongAnswer.map(x => {
            return {
              object: this.getRandomId(this.objects),
              color: this.getRandomId(colors),
              name: this.getRandomId(colors),
              isCorrect: this.state.isCorrect
            };
          });
        } else {
          wrongChoicesNotPassed1 = false;
          wrongChoicesNotPassed2 = false;
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
  };

  render() {
    return (
      <Fragment>
        <div
          className="container-fluid text-center m-0 p-0"
          style={{ position: "absolute", top: 0 }}
        >
          {this.props.gameInfo == null ? null : (
            <GameHeader
              gameInfo={this.props.gameInfo}
              onTimeOut={this.props.onTimeOut}
              paused={this.props.paused}
              onPause={this.props.onPause}
              ref={this.headerRef}
            />
          )}
        </div>
        <div className="container text-center h-100">
          <div className="row align-items-center h-100">
            <div className="col">
              <h2 style={styles.text}>
                Pilih warna yang sesuai dengan tulisannya
              </h2>
              <div className="row mt-5 ">
                {this.state.choices.map((item, index) => {
                  let component;
                  if (index < 4) {
                    component = (
                      <div className="col-md-3" key={index}>
                        <div className="row">
                          <div className="col"></div>
                          <div
                            className="col-auto aks-btn"
                            style={
                              this.state.choices[index].isCorrect
                                ? styles.borderTrue
                                : styles.borderFalse
                            }
                            onClick={() =>
                              this.checked(index, item.name, item.color)
                            }
                          >
                            {this.getColor(item.object, item.color, item.name)}
                          </div>
                          <div className="col"></div>
                        </div>
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
                      <div className="col-md-3" key={index}>
                        <div className="row">
                          <div className="col"></div>
                          <div
                            className="col-auto aks-btn"
                            style={
                              this.state.choices[index].isCorrect
                                ? styles.borderTrue
                                : styles.borderFalse
                            }
                            onClick={() =>
                              this.checked(index, item.name, item.color)
                            }
                          >
                            {this.getColor(item.object, item.color, item.name)}
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    );
                  }
                  return component;
                })}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  text: {
    fontWeight: "normal",
    fontFamily: "Carter One",
    color: "#1D1D1D"
  },
  borderTrue: {
    padding: "15px",
    border: "5px solid #00FF00",
    borderRadius: "8px",
    margin: "0px 35px",
    pointerEvents: "none"
  },
  borderFalse: {
    padding: "15px",
    border: "none",
    margin: "0px 35px"
  }
};

const boxStyles = {
  text: {
    fontWeight: "bold",
    fontFamily: "Carter One",
    color: "#FFFFFF"
  },
  borderTrue: {
    padding: "18px",
    border: "5px solid #000000",
    borderRadius: "10px",
    margin: "0px 35px",
    pointerEvents: "none"
  },
  borderFalse: {
    padding: "18px",
    border: "none",
    margin: "0px 35px"
  }
};
