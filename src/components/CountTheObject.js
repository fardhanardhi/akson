import React, { Component, Fragment } from "react";

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
    this.reload();
  }

  reload = () => {
    this.getRandomImage(Soal);
  };

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

    if (this.state.soalJawaban1.isBenar) {
      this.reload();
      if (this.props.gameInfo != null) {
        this.props.addScore();
      }
    } else {
      if (this.props.gameInfo != null) {
        this.props.addWrongScore();
      }
    }
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
    if (this.state.soalJawaban2.isBenar) {
      this.reload();
      if (this.props.gameInfo != null) {
        this.props.addScore();
      }
    } else {
      if (this.props.gameInfo != null) {
        this.props.addWrongScore();
      }
    }
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
    if (this.state.soalJawaban3.isBenar) {
      this.reload();
      if (this.props.gameInfo != null) {
        this.props.addScore();
      }
    } else {
      if (this.props.gameInfo != null) {
        this.props.addWrongScore();
      }
    }
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
    if (this.state.soalJawaban4.isBenar) {
      this.reload();
      if (this.props.gameInfo != null) {
        this.props.addScore();
      }
    } else {
      if (this.props.gameInfo != null) {
        this.props.addWrongScore();
      }
    }
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
            <div className="col" style={style.pertanyaanStyle}>
              <div className="row mb-5">
                <div className="col text-center">
                  <h2>{this.state.soalTanya.text}</h2>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col"></div>
                <div className="col-auto">
                  <img
                    src={this.state.soalGambar.image}
                    alt="countImage"
                    style={style.imageStyle}
                  />
                </div>
                <div className="col-auto ml-5">
                  <div className="row ">
                    <button
                      className="m-3"
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
                    <button
                      className="m-3"
                      style={
                        !this.state.soalJawaban2.isClick
                          ? style.buttonStyleNotClick
                          : this.state.soalJawaban2.isBenar
                          ? style.buttonStyleTrue
                          : style.buttonStyleFalse
                      }
                      onClick={this.clickedJwb2}
                    >
                      {this.state.soalJawaban2.text}
                    </button>
                  </div>
                  <div className="row">
                    <button
                      className="m-3"
                      style={
                        !this.state.soalJawaban3.isClick
                          ? style.buttonStyleNotClick
                          : this.state.soalJawaban3.isBenar
                          ? style.buttonStyleTrue
                          : style.buttonStyleFalse
                      }
                      onClick={this.clickedJwb3}
                    >
                      {this.state.soalJawaban3.text}
                    </button>
                    <button
                      className="m-3"
                      style={
                        !this.state.soalJawaban4.isClick
                          ? style.buttonStyleNotClick
                          : this.state.soalJawaban4.isBenar
                          ? style.buttonStyleTrue
                          : style.buttonStyleFalse
                      }
                      onClick={this.clickedJwb4}
                    >
                      {this.state.soalJawaban4.text}
                    </button>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const style = {
  imageStyle: {
    maxHeight: "400px",
    maxWidth: "500px",
    borderRadius: "30px",
    border: "3px solid green"
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
    borderRadius: "8px"
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
    borderRadius: "8px"
  }
};
