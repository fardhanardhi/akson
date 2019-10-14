import React, { Component } from "react";
import score from "../assets/score.svg";
import checkScore from "../assets/checkScore.svg";
import errorScore from "../assets/errorScore.svg";
import Home from "../assets/Home.svg";
import ThermoBlue from "../components/ThermoBlue";

export default class Score extends Component {
  render() {
    return (
      <div style={style.box}>
        <div style={style.fontSatu}>Permainan Selesai</div>
        <div className="container">
          <div className="col-md-12 ml-3 mt-3">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-2">
                    <img src={score} alt="score"></img>
                  </div>
                  <div className="col-md-2" style={style.fontDua}>
                    10
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-2">
                    <img src={checkScore} alt="Check Score"></img>
                  </div>
                  <div className="col-md-2" style={style.fontDua}>
                    18
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-2">
                    <img src={errorScore} alt="Error Score"></img>
                  </div>
                  <div className="col-md-2" style={style.fontDua}>
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ml-4 mt-4">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-3">
                    <ThermoBlue id="thermo1" progress={100} color="#F3B431" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <ThermoBlue id="thermo2" progress={70} color="#3498DB" />
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={style.fontTiga}>
          <div className="col-md-12 mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="row ml-5">Score saya</div>
              </div>
              <div className="col-md-6">Jumlah rata-rata</div>
            </div>
          </div>
        </div>
        <div style={style.Home}>
          <img src={Home} alt="home icon"></img>
        </div>
      </div>
    );
  }
}

const style = {
  box: {
    background: "#EFFFF0",
    borderRadius: "50px",
    width: "380px",
    height: "471px"
  },

  fontSatu: {
    fontFamily: "Carter One",
    fontSize: "29px",
    color: "#1D1D1D",
    marginLeft: "60px",
    marginTop: "20px"
  },

  fontDua: {
    fontFamily: "Carter One",
    fontSize: "19px",
    color: "#1D1D1D"
  },

  fontTiga: {
    fontFamily: "Carter One",
    fontSize: "14px",
    color: "#1D1D1D"
  },

  Home: {
    paddingLeft: "150px",
    paddingTop: "50px"
  }
};
