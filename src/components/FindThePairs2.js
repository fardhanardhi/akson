import React, { Component, Fragment } from "react";

import Sphere from "../components/Sphere";
import Cone from "../components/Cone";
import UglyPyramid from "../components/UglyPyramid";
import Pyramid from "../components/Pyramid";
import Cylinder from "../components/Cylinder";
import Prism from "../components/Prism";
import Cuboid from "../components/Cuboid";
import Cube from "../components/Cube";
import HexagonalPrism from "../components/HexagonalPrism";

import GameHeader from "../components/GameHeader";

import colors from "../assets/colors";
import AppContext from "../context/AppContext";

class FindThePairs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: [],
      pair: [],
      isClicked: false,
      isCorrect: false,
      borderDefault: false,
      rightChoicesCount: 0,
      age: 10,
      countBenar: null,
      countSalah: null
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
    // this.getChoices();
    let benar = 0;
    let salah = 0;
    if (this.state.age === 8) {
        benar =2;
        salah =4;
    } else if (this.state.age === 9) {
        benar =1;
        salah =6;
    } else if (this.state.age === 10) {
        benar =3;
        salah =6;
    } else if (this.state.age === 11) {
        benar =1;
        salah =10;
    }
    this.setState({countBenar: benar, countSalah:salah}, ()=> this.reload());
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

  reload = () => {
    this.getChoices();
    this.setState({
      pair: [],
      isClicked: false,
      isCorrect: false,
      borderDefault: false,
      rightChoicesCount: 0
    });
  };

  getChoices = () => {
    // generate pilihan jawaban benar
    let rightChoices = [...Array(this.state.countBenar)].map(x => {
      console.log(this.state.countBenar);
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors),
        click: this.state.isClicked,
        correct: this.state.isCorrect,
        border: this.state.borderDefault
      };
    });

    // cek pilihan jawaban benar
    if (this.state.countBenar > 1) {
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
                    click: this.state.isClicked,
                    correct: this.state.isCorrect,
                    border: this.state.borderDefault
                  };
                });
              } else {
                rightChoicesNotPassed = false;
              }
            }
          }
        }
      }
    }

    // duplikasi pilihan jawaban benar
    const rightChoices2 = rightChoices.map(object => ({ ...object }));
    rightChoices = [...rightChoices, ...rightChoices2];

    // generate pilihan jawaban salah
    let wrongChoices = [...Array(this.state.countSalah)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        color: this.getRandomId(colors),
        click: this.state.isClicked,
        correct: this.state.isCorrect,
        border: this.state.borderDefault
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
                  click: this.state.isClicked,
                  correct: this.state.isCorrect,
                  border: this.state.borderDefault
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
                  click: this.state.isClicked,
                  correct: this.state.isCorrect,
                  border: this.state.borderDefault
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

  clicked = index => {
    let choicesUpdate = this.state.choices;
    let pair = this.state.pair;

    if (this.state.choices[index].click === false) {
      choicesUpdate[index].click = true;

      if (pair.length < 2) {
        if (pair.length === 0) {
          pair = [...pair, index];
        } else {
          for (let i = 0; i < pair.length; i++) {
            if (pair[i] !== index) {
              pair = [...pair, index];
            }
          }
          console.log(pair);

          if (pair.length > 1) {
            if (
              choicesUpdate[pair[0]].color === choicesUpdate[pair[1]].color &&
              choicesUpdate[pair[0]].object === choicesUpdate[pair[1]].object
            ) {
              console.log("benar");
              choicesUpdate[pair[0]].correct = true;
              choicesUpdate[pair[1]].correct = true;
              if (this.props.gameInfo != null) {
                this.props.addScore();
              }
              this.setState({
                rightChoicesCount: this.state.rightChoicesCount + 1
              });
            } else {
              console.log("salah");
              if (this.props.gameInfo != null) {
                this.props.addWrongScore();
              }
            }
          }
        }
      } else {
        pair = [index];

        //all clik is null
        choicesUpdate = choicesUpdate.map(item => {
          if (!item.correct) {
            item.click = false;
          }
          return item;
        });

        choicesUpdate[index].click = true;
      }

      this.setState({ pair }); //akhir

      this.setState({ choices: choicesUpdate }, () => {
        console.log(this.state.choices);
        if (this.state.rightChoicesCount === this.state.countBenar) {
          this.reload();
        }
      });
    } else if (this.state.choices[index].click === true) {
      choicesUpdate[index].click = false;
      this.setState({ choices: choicesUpdate }, () => {
        console.log(this.state.choices);
        if (this.state.rightChoicesCount === this.state.countBenar) {
          this.reload();
        }
      });
    }
  };

  render() {
    // const clickHandler =
    // console.log("gameinfo ftp:", this.props.gameInfo);

    console.log(this.state.choices);

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
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h2 className="mb-5" style={styles.text}>
                Temukan objek yang berpasangan
              </h2>
              <div className="row mb-4">
                {this.state.choices.map((item, index) => {
                  let component = null;
                  if (this.state.age === 7) {
                    if (index < 2) {
                      component = (
                        <div className="col-md-3" key={index}>
                          <div className="row">
                            <div
                              className="col aks-btn"
                              style={
                                item.correct
                                  ? styles.borderTrue
                                  : !item.click
                                  ? styles.borderNotClick
                                  : this.state.pair.length === 1
                                  ? styles.borderDefault
                                  : styles.borderFalse
                              }
                              onClick={() => this.clicked(index)}
                            >
                              {this.getObject(item.object, item.color)}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      component = null;
                    }
                  } else if (this.state.age > 7) {
                    if (index < 4) {
                      component = (
                        <div className="col-md-3" key={index}>
                          <div className="row">
                            <div
                              className="col aks-btn"
                              style={
                                item.correct
                                  ? styles.borderTrue
                                  : !item.click
                                  ? styles.borderNotClick
                                  : this.state.pair.length === 1
                                  ? styles.borderDefault
                                  : styles.borderFalse
                              }
                              onClick={() => this.clicked(index)}
                            >
                              {this.getObject(item.object, item.color)}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      component = null;
                    }
                  }
                  return component;
                })}
              </div>
              <div className="row mb-4">
                {this.state.choices.map((item, index) => {
                  let component = null;
                  if (this.state.age === 7) {
                    if (index < 4 && index >= 2) {
                      component = (
                        <div className="col-md-3" key={index}>
                          <div className="row">
                            <div
                              className="col aks-btn"
                              style={
                                item.correct
                                  ? styles.borderTrue
                                  : !item.click
                                  ? styles.borderNotClick
                                  : this.state.pair.length === 1
                                  ? styles.borderDefault
                                  : styles.borderFalse
                              }
                              onClick={() => this.clicked(index)}
                            >
                              {this.getObject(item.object, item.color)}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      component = null;
                    }
                  } else if (this.state.age > 7) {
                    if (index < 8 && index >= 4) {
                      component = (
                        <div className="col-md-3" key={index}>
                          <div className="row">
                            <div
                              className="col aks-btn"
                              style={
                                item.correct
                                  ? styles.borderTrue
                                  : !item.click
                                  ? styles.borderNotClick
                                  : this.state.pair.length === 1
                                  ? styles.borderDefault
                                  : styles.borderFalse
                              }
                              onClick={() => this.clicked(index)}
                            >
                              {this.getObject(item.object, item.color)}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      component = null;
                    }
                  }

                  return component;
                })}
              </div>
              {this.state.age > 9 ? (
                <div className="row mb-4">
                  {this.state.choices.map((item, index) => {
                    let component = null;
                    if (index < 12 && index >= 8) {
                      component = (
                        <div className="col-md-3" key={index}>
                          <div className="row text-center">
                            <div
                              className="col aks-btn"
                              style={
                                item.correct
                                  ? styles.borderTrue
                                  : !item.click
                                  ? styles.borderNotClick
                                  : this.state.pair.length === 1
                                  ? styles.borderDefault
                                  : styles.borderFalse
                              }
                              onClick={() => this.clicked(index)}
                            >
                              {this.getObject(item.object, item.color)}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      component = null;
                    }
                    return component;
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="col-md-1"></div>
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
    border: "5px solid #FF0000",
    borderRadius: "8px",
    margin: "0px 35px"
  },
  borderDefault: {
    padding: "15px",
    border: "3px solid black",
    borderRadius: "8px",
    margin: "0px 35px"
  },
  borderNotClick: {
    padding: "15px",
    border: "none",
    margin: "0px 35px"
  }
};

FindThePairs.contextType = AppContext;

export default FindThePairs;
