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
      isChecked: false,
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
    this.getChoices();
  }

  componentDidUpdate() {
    console.log(this.state.choices);
  }

  getRandomId = arr => {
    const id = Math.floor(Math.random() * arr.length);
    return id;
  };

  getObject = (objectId, patternId, patternIdName) => {
    const obj = [
     {
       objek :  <div>
       <svg
         width="152"
         height="135"
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
     </div>,

      nama : "segitiga",
      pattern : <p style={styles.textHelp}>{`${Pattern[patternId].name}`}</p>
     }
      ,
     {
       objek : <div>
       <svg
         width="141"
         height="133"
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
       
     </div>,
     
      nama : "Stars",
      pattern : <p style={styles.textHelp}>{`${Pattern[patternId].name}`}</p>
     },

     {
       objek :  <div>
       <svg
         width="131"
         height="131"
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
     </div>,

      nama : "Circle",
      pattern : <p style={styles.textHelp}>{`${Pattern[patternId].name}`}</p>
     },
    
     {
       objek : <div>
       <svg
         width="129"
         height="129"
         viewBox="0 0 129 129"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <rect
           width="129"
           height="129"
           style={{ fill: Pattern[patternId].patt.url() }}
         />
         <defs
           dangerouslySetInnerHTML={{
             __html: stringify(Pattern[patternId].patt)
           }}
         />
       </svg>
       {/* <p style={styles.textHelp} >{`${Pattern[patternId].name}`}</p> */}
     </div>,

     nama : "Rectangular",
     pattern : <p style={styles.textHelp}>{`${Pattern[patternId].name}`}</p>
     },
      
     {
      objek : <div>
      <svg
        width="270"
        height="80"
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
    </div>,

      nama : "Parallelogram",
      pattern : <p style={styles.textHelp}>{`${Pattern[patternId].name}`}</p>
     },
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
        name: this.getRandomId(Pattern)
        // isSelected: false,
        // isCorrect: false
      };
    });

    // generate pilihan jawaban salah
    let wrongChoices = [...Array(11)].map(x => {
      return {
        object: this.getRandomId(this.objects),
        pattern: this.getRandomId(Pattern),
        name: this.getRandomId(Pattern)
        // isSelected: false,
        // isCorrect: false
      };
    });

    // cek pilihan jawaban benar
    let wrongChoicesNotPassed1 = true;
    let wrongChoicesNotPassed2 = true;
    while (wrongChoicesNotPassed1 || wrongChoicesNotPassed2) {
      for (let j = 0; j < rightChoices.length; j++) {
        if (
          rightChoices.object === wrongChoices[j].object &&
          rightChoices.pattern === wrongChoices[j].pattern
        ) {
          wrongChoices = wrongChoices.map(x => {
            return {
              object: this.getRandomId(this.objects),
              pattern: this.getRandomId(Pattern),
              name: this.getRandomId(Pattern)
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
              wrongChoices[i].pattern === wrongChoices[j].pattern
            ) {
              wrongChoices = wrongChoices.map(x => {
                return {
                  object: this.getRandomId(this.objects),
                  pattern: this.getRandomId(Pattern),
                  name: this.getRandomId(Pattern)
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

  selectChoice = index => {
    let choices = this.state.choices;
    choices[index].isSelected = !choices[index].isSelected;
    this.setState({ choices: choices });
    console.log("cois: ", choices[index]);
  };

  render() {
    console.log("gameinfo ftp:", this.props.gameInfo);
    console.log(this.state.choices);

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
        <div className="container text-center m-0 p-0">
          <h2 style={styles.text}>Shape and pattern</h2>

          {this.state.isQuestion.map((item, index) => {
            let component = null;
            component = (
              <div className="col-md-3" key={index}>
                <div className="row">

                </div>
                <h3> {this.getObject(item.object, item.pattern).nama} </h3>
                {this.getObject(item.object, item.pattern).pattern}
              </div>
            )
            return component
          })}

          <div className="row">
            {this.state.choices.map((item, index) => {
              let component = null;
              if (index < 4) {
                component = (
                  <div className="col-md-3" key={index}>
                    <div className="row">
                      <div className="col"></div>
                      <div
                        className={
                          item.isSelected
                            ? "col-auto aks-btn bg-success"
                            : "col-auto aks-btn"
                        }
                        onClick={() => this.selectChoice(index)}
                      >
                        {this.getObject(item.object, item.pattern).objek}
                      </div>
                      <div className="col"></div>
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
                      <div className="col"></div>
                      <div
                        className={
                          item.isSelected
                            ? "col-auto aks-btn bg-success"
                            : "col-auto aks-btn"
                        }
                        onClick={() => this.selectChoice(index)}
                      >
                        {this.getObject(item.object, item.pattern).objek}
                      </div>
                      <div className="col"></div>
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
                      <div className="col"></div>
                      <div
                        className={
                          item.isSelected
                            ? "col-auto aks-btn bg-success"
                            : "col-auto aks-btn"
                        }
                        onClick={() => this.selectChoice(index)}
                      >
                        {this.getObject(item.object, item.pattern).objek}
                      </div>
                      <div className="col"></div>
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

  textHelp: {
    position: "absolute",
    fontFamily: "Carter One",
    fontSize: "1.5vw",
    color: "#1D1D1D",
    top: "17px",
    marginLeft: "105px",
    cursor: "pointer"
  }
};
