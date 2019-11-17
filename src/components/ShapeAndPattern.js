import React, { Component } from "react";

import Star from "../components/Stars";
import Rectangel from "../components/Rectangel";
import Circle from "../components/Circle";
import Rectangular from "../components/Rectangel";
import Parallelogram from "../components/Parallelogram";

import GameHeader from "../components/GameHeader";

import stringify from "virtual-dom-stringify";
import Pattern from "../components/Pattern";

export default class FindThePairs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: [],
      isCorrect: false,
      isClicked: false,
      shelter: [],
      isQuestion: []
    };

    this.objects = [
      <Circle />,
      <Rectangel />,
      <Star />,
      <Rectangular />,
      <Parallelogram />
    ];
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
      isClicked: false,
      shelter: []
    });
  };

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
  };

  getObject = (objectId, patternId) => {
    const obj = [
      {
        objek: (
          <div>
            <svg
              width="112"
              height="95"
              viewBox="0 0 152 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs
                dangerouslySetInnerHTML={{
                  __html: stringify(Pattern[patternId].patt)
                }}
              />

              <path
                d="M76 0L151.344 134.25H0.655792L76 0Z"
                style={{ fill: Pattern[patternId].patt.url() }}
              />
            </svg>
            {/* <p style={styles.textHelp}>{`${Pattern[patternId].name}`}</p> */}
          </div>
        ),

        nama: "segitiga",
        patternName: Pattern[patternId].name,
        patternColor: Pattern[patternId].color
      },
      {
        objek: (
          <div>
            <svg
              width="101"
              height="93"
              viewBox="0 0 141 133"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs
                dangerouslySetInnerHTML={{
                  __html: stringify(Pattern[patternId].patt)
                }}
              />
              <path
                d="M70.5 0L87.0018 50.7873H140.403L97.2004 82.1755L113.702 132.963L70.5 101.575L27.2978 132.963L43.7996 82.1755L0.597343 50.7873H53.9982L70.5 0Z"
                style={{ fill: Pattern[patternId].patt.url() }}
              />
            </svg>
          </div>
        ),

        nama: "Bintang",
        patternName: Pattern[patternId].name,
        patternColor: Pattern[patternId].color
      },

      {
        objek: (
          <div>
            <svg
              width="91"
              height="91"
              viewBox="0 0 131 131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="65.5"
                cy="65.5"
                r="65.5"
                style={{ fill: Pattern[patternId].patt.url() }}
              />
              <defs
                dangerouslySetInnerHTML={{
                  __html: stringify(Pattern[patternId].patt)
                }}
              />
            </svg>
            {/* <p style={styles.textHelp}>{`${Pattern[patternId].name}`}</p> */}
          </div>
        ),

        nama: "Lingkaran",
        patternName: Pattern[patternId].name,
        patternColor: Pattern[patternId].color
      },

      {
        objek: (
          <div>
            <svg
              width="129"
              height="129"
              viewBox="0 0 129 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="89"
                height="89"
                style={{ fill: Pattern[patternId].patt.url() }}
              />
              <defs
                dangerouslySetInnerHTML={{
                  __html: stringify(Pattern[patternId].patt)
                }}
              />
            </svg>
            {/* <p style={styles.textHelp} >{`${Pattern[patternId].name}`}</p> */}
          </div>
        ),

        nama: "Persegi",
        patternName: Pattern[patternId].name,
        patternColor: Pattern[patternId].color
      },

      {
        objek: (
          <div>
            <svg
              width="230"
              height="50"
              viewBox="0 0 270 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 79.5L57.5 0H270L215.5 79.5H0Z"
                style={{ fill: Pattern[patternId].patt.url() }}
              />
              <defs
                dangerouslySetInnerHTML={{
                  __html: stringify(Pattern[patternId].patt)
                }}
              />
            </svg>
            {/* <p style={styles.textHelp} >{`${Pattern[patternId].name}`}</p> */}
          </div>
        ),

        nama: "Jajargenjang",
        patternName: Pattern[patternId].name,
        patternColor: Pattern[patternId].color
      }
    ];

    return obj[objectId];
  };

  // getQuestion = () => {

  // }

  getChoices = () => {
    // generate pilihan jawaban benar
    let rightChoices = [...Array(1)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        pattern: this.getRandomId(Pattern),
        correct: this.state.isCorrect,
        click: this.state.isClicked
      };
    });

    // generate pilihan jawaban salah
    let wrongChoices = [...Array(11)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        pattern: this.getRandomId(Pattern),
        correct: this.state.isCorrect,
        click: this.state.isClicked
      };
    });

    // cek pilihan jawaban benar
    let wrongChoicesNotPassed1 = true;
    let wrongChoicesNotPassed2 = true;
    while (wrongChoicesNotPassed1 || wrongChoicesNotPassed2) {
      for (let j = 0; j < rightChoices.length; j++) {
        if (
          rightChoices.object === wrongChoices[j].object &&
          rightChoices.pattern === wrongChoices[j].pattern &&
          rightChoices.name === wrongChoices[j].name
        ) {
          wrongChoices = wrongChoices.map(x => {
            return {
              object: this.getRandomId(this.objects),
              pattern: this.getRandomId(Pattern),
              correct: this.state.isCorrect,
              click: this.state.isClicked
            };
          });
        } else {
          wrongChoicesNotPassed1 = false;
        }
      }

      for (let i = 0; i < wrongChoices.length; i++) {
        for (let j = 0; j < wrongChoices.length; j++) {
          if (i !== j) {
            if (
              wrongChoices[i].object === wrongChoices[j].object &&
              wrongChoices[i].pattern === wrongChoices[j].pattern &&
              wrongChoices[i].name === wrongChoices[j].name
            ) {
              wrongChoices = wrongChoices.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  pattern: this.getRandomId(Pattern),
                  correct: this.state.isCorrect,
                  click: this.state.isClicked
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

    this.setState({ choices, isQuestion: rightChoices });
    console.log("ini benar", rightChoices);
    console.log("ini salah", wrongChoices);
    console.log("total", hasil);
  };

  selectChoice = (index, objectId, patternId) => {
    let choicesUpdate = this.state.choices;
    let shelter = this.state.shelter;

    choicesUpdate[index] = {
      object: this.state.choices[index].object,
      pattern: this.state.choices[index].pattern,
      correct:
        objectId === this.state.isQuestion[0].object &&
        patternId === this.state.isQuestion[0].pattern
          ? true
          : false,
      click: !choicesUpdate[index].click ? true : false
    };

    if (this.state.shelter.length === 0) {
      shelter = [...shelter, index];
    } else {
      choicesUpdate = choicesUpdate.map(item => {
        item.click = false;
        return item;
      });

      choicesUpdate[index].click = true;
    }

    this.setState({ choices: choicesUpdate, shelter });
    console.log("cois: ", choicesUpdate[index]);

    if (choicesUpdate[index].correct === true) {
      if (this.props.gameInfo != null) {
        this.props.addScore();
      }
      console.log("benar");
      this.reload();
    } else {
      if (this.props.gameInfo != null) {
        this.props.addWrongScore();
      }
      console.log("salah");
    }
  };

  render() {
    return (
      <div className="container-fluid p-0">
        {this.props.gameInfo == null ? null : (
          <GameHeader
            gameInfo={this.props.gameInfo}
            onTimeOut={this.props.onTimeOut}
            paused={this.props.paused}
            onPause={this.props.onPause}
            ref={this.headerRef}
          />
        )}
        <div className="container text-center h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <h2 style={styles.text}>Temukan</h2>
              {this.state.isQuestion.map((item, index) => {
                let component = null;
                component = (
                  <div className="col-md-12" key={index}>
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-auto">
                        <h3 style={styles.textCase}>
                          {this.getObject(item.object, item.pattern).nama},{" "}
                          {
                            this.getObject(item.object, item.pattern)
                              .patternColor
                          }
                          ,{" "}
                          {
                            this.getObject(item.object, item.pattern)
                              .patternName
                          }{" "}
                        </h3>
                      </div>
                      <div className="col"></div>
                    </div>
                  </div>
                );
                return component;
              })}

              <div className="row">
                {this.state.choices.map((item, index) => {
                  let component = null;
                  if (index < 4) {
                    component = (
                      <div className="col-md-3" key={index}>
                        <div className="row">
                          <div
                            className="col aks-btn"
                            style={
                              !item.click
                                ? styles.borderNotClick
                                : item.correct
                                ? styles.borderTrue
                                : styles.borderFalse
                            }
                            onClick={() =>
                              this.selectChoice(
                                index,
                                item.object,
                                item.pattern
                              )
                            }
                          >
                            {this.getObject(item.object, item.pattern).objek}
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
              <div className="row mt-5">
                {this.state.choices.map((item, index) => {
                  let component = null;
                  if (index < 8 && index >= 4) {
                    component = (
                      <div className="col-md-3" key={index}>
                        <div className="row">
                          <div
                            className="col aks-btn"
                            style={
                              !item.click
                                ? styles.borderNotClick
                                : item.correct
                                ? styles.borderTrue
                                : styles.borderFalse
                            }
                            onClick={() =>
                              this.selectChoice(
                                index,
                                item.object,
                                item.pattern
                              )
                            }
                          >
                            {this.getObject(item.object, item.pattern).objek}
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
              <div className="row mt-5">
                {this.state.choices.map((item, index) => {
                  let component = null;
                  if (index < 12 && index >= 8) {
                    component = (
                      <div className="col-md-3" key={index}>
                        <div className="row">
                          <div
                            className="col aks-btn"
                            style={
                              !item.click
                                ? styles.borderNotClick
                                : item.correct
                                ? styles.borderTrue
                                : styles.borderFalse
                            }
                            onClick={() =>
                              this.selectChoice(
                                index,
                                item.object,
                                item.pattern
                              )
                            }
                          >
                            {this.getObject(item.object, item.pattern).objek}
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
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}

const styles = {
  text: {
    fontWeight: "normal",
    fontFamily: "Carter One",
    color: "#1D1D1D"
  },
  textCase: {
    fontWeight: "normal",
    fontFamily: "Carter One",
    color: "#1D1D1D"
  },
  borderTrue: {
    padding: "15px",
    border: "3px solid #00FF00",
    borderRadius: "8px",
    margin: "0px 35px",
    pointerEvents: "none"
  },
  borderFalse: {
    padding: "15px",
    border: "5px solid #FF0000",
    borderRadius: "8px",
    margin: "0px 35px",
    pointerEvents: "none"
  },
  borderNotClick: {
    padding: "15px",
    border: "none",
    margin: "0px 35px"
  }
};
