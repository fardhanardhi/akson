import React, { Component } from "react";

import GameHeader from "./GameHeader";
import Soal from "./soalCountTheObject"; 

export default class CountTheObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soalGambar : null,
      soalTanya : null,
      soalJawaban1 : null,
      soalJawaban2 : null,
      soalJawaban3 : null,
      soalJawaban4 : null,
    };
    
    this.soalKuis = <Soal />;
    console.log("jancok", this.soalKuis);
  }

  componentDidMount() {
    this.getRandomImage(this.soalKuis);
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

    this.setState({
      soalGambar : img,
      soalTanya : qst,
      soalJawaban1 : jwb1,
      soalJawaban2 : jwb2,
      soalJawaban3 : jwb3,
      soalJawaban4 : jwb4
    })
    console.log("goblok");
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
                style={style.buttonSyle}
                onClick={() => console.log(this.state.soalJawaban1.isBenar)}
              >
                {this.state.soalJawaban1.text}
              </button>
            </div>
            <div className="col-3">
              <button
                style={style.buttonSyle}
                onClick={() => console.log(this.state.soalJawaban2.isBenar)}
              >
                {this.state.soalJawaban2.text}
              </button>
            </div>
            <div className="col-3">
              <button
                style={style.buttonSyle}
                onClick={() => console.log(this.state.soalJawaban3.isBenar)}
              >
                {this.state.soalJawaban3.text}
              </button>
            </div>
            <div className="col-3">
              <button
                style={style.buttonSyle}
                onClick={() => console.log(this.state.soalJawaban4.isBenar)}
              >
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
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  pertanyaanStyle: {
    fontWeight: "normal",
    fontFamily: "Carter One"
  },
  buttonSyle: {
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    radiusBorder: "5px"
  },
  buttonGroup: {
    marginTop: "25px"
  }
};
