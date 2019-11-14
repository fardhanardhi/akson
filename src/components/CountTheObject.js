import React, { Component } from "react";

import GameHeader from "./GameHeader";
import Soal from "./soalCountTheObject";

export default class CountTheObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soalGambar: null,
      soalTanya: null,
      soalJawaban1: null,
      soalJawaban2: null,
      soalJawaban3: null,
      soalJawaban4: null,
      shelter: null
    };
  }

  componentWillMount() {
    this.getRandomImage(Soal);
  }

  getRandomImage = ArImg => {
    let num = Math.floor(Math.random() * ArImg.length);
    let img = ArImg[num];
    let num2 = Math.floor(Math.random() * img.pertanyaan.length);
    let qst = img.pertanyaan[num2];
    let jwb = qst.pilihanJawaban;
    for (let i = jwb.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = jwb[i];
      jwb[i] = jwb[j];
      jwb[j] = temp;
    }
    let jwb1 = jwb[0];
    let jwb2 = jwb[1];
    let jwb3 = jwb[2];
    let jwb4 = jwb[3];

    this.setState(
      {
        soalGambar: img,
        soalTanya: qst,
        soalJawaban1: jwb1,
        soalJawaban2: jwb2,
        soalJawaban3: jwb3,
        soalJawaban4: jwb4
      },
      () => console.log("state: ", this.state)
    );
    console.log("woy");
  };

  clickedJwb1 = () => {
    let jwbUpdate1 = this.state.soalJawaban1;

    jwbUpdate1 = {
      text: this.state.soalJawaban1.text,
      isBenar: this.state.soalJawaban1.isBenar,
      isClick: !this.state.soalJawaban1.isClick ? true : false
    };

    this.setState({ soalJawaban1: jwbUpdate1 }, () =>
      console.log("jwb 1", this.state.soalJawaban1)
    );
  };

  clickedJwb2 = () => {
    let jwbUpdate2 = this.state.soalJawaban2;

    jwbUpdate2 = {
      text: this.state.soalJawaban2.text,
      isBenar: this.state.soalJawaban2.isBenar,
      isClick: !this.state.soalJawaban2.isClick ? true : false
    };

    this.setState({ soalJawaban2: jwbUpdate2 }, () =>
      console.log("jwb 2", this.state.soalJawaban2)
    );
  };

  clickedJwb3 = () => {
    let jwbUpdate3 = this.state.soalJawaban3;

    jwbUpdate3 = {
      text: this.state.soalJawaban3.text,
      isBenar: this.state.soalJawaban3.isBenar,
      isClick: !this.state.soalJawaban3.isClick ? true : false
    };

    this.setState({ soalJawaban3: jwbUpdate3 }, () =>
      console.log("jwb 3", this.state.soalJawaban3)
    );
  };

  clickedJwb4 = () => {
    let jwbUpdate4 = this.state.soalJawaban4;

    jwbUpdate4 = {
      text: this.state.soalJawaban4.text,
      isBenar: this.state.soalJawaban4.isBenar,
      isClick: !this.state.soalJawaban4.isClick ? true : false
    };

    this.setState({ soalJawaban4: jwbUpdate4 }, () =>
      console.log("jwb 4", this.state.soalJawaban4)
    );
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
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8" style={style.pertanyaanStyle}>
            <div className="row">
              <h1>{this.state.soalTanya.text}</h1>
              <div className="col-2"></div>
              <div className="col-8">
                <img
                  src={this.state.soalGambar.image}
                  alt="countImage"
                  style={style.imageStyle}
                />
              </div>
              <div className="col"></div>
            </div>
            <div className="row" style={style.buttonGroup}>
              <div className="col-3">
                <button
                  style={
                    !this.state.soalJawaban1.isClick
                      ? style.buttonStyleNotClick
                      : this.state.soalJawaban1.isBenar
                      ? style.buttonStyleTrue
                      : style.buttonStyleFalse
                  }
                  onClick={this.clickedJwb1}
                >
                  {this.state.soalJawaban1.text}
                </button>
              </div>
              <div className="col-3">
                <button style={
                    !this.state.soalJawaban2.isClick
                      ? style.buttonStyleNotClick
                      : this.state.soalJawaban2.isBenar
                      ? style.buttonStyleTrue
                      : style.buttonStyleFalse
                  } onClick={this.clickedJwb2}>
                  {this.state.soalJawaban2.text}
                </button>
              </div>
              <div className="col-3">
                <button style={
                    !this.state.soalJawaban3.isClick
                      ? style.buttonStyleNotClick
                      : this.state.soalJawaban3.isBenar
                      ? style.buttonStyleTrue
                      : style.buttonStyleFalse
                  } onClick={this.clickedJwb3}>
                  {this.state.soalJawaban3.text}
                </button>
              </div>
              <div className="col-3">
                <button style={
                    !this.state.soalJawaban4.isClick
                      ? style.buttonStyleNotClick
                      : this.state.soalJawaban4.isBenar
                      ? style.buttonStyleTrue
                      : style.buttonStyleFalse
                  } onClick={this.clickedJwb4}>
                  {this.state.soalJawaban4.text}
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

const style = {
  imageStyle: {
    maxHeight: "400px",
    maxWidth: "500px"
  },
  pertanyaanStyle: {
    fontWeight: "normal",
    fontFamily: "Carter One"
  },
  buttonStyleTrue: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    border: "5px solid #00FF00",
    borderRadius: "8px",
    margin: "0px 35px",
    pointerEvents: "none"
  },
  buttonStyleFalse: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    border: "5px solid #FF0000",
    borderRadius: "8px",
    margin: "0px 35px"
  },
  buttonStyleNotClick: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    border: "5px solid #4CAF50",
    borderRadius: "8px",
    margin: "0px 35px"
  },
  buttonGroup: {
    marginTop: "25px"
  },

};
