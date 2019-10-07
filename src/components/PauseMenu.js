import React, { Component } from "react";
import Play from "../assets/play.svg";
import Restart from "../assets/restart.svg";
import X from "../assets/x.svg";

export default class PauseMenu extends Component {
  render() {
    return (
      <div style={style.position}>
        <div style={style.shape}>
          <div className="mt-4 ml-4" style={style.tulisanSatu}>
            Mencocokkan objek
          </div>
          <div className="ml-5" style={style.tulisanDua}>
            <div className="container">
              <div className="col-md-12">
                <div className="row" styles={style.tulisanDua}>
                  Temukan objek yang berpasangan
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mr-5">
            <div className="container">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <img src={Play} alt="Play"></img>
                  </div>
                  <div className="col-md-4">
                    <img src={Restart} alt="Restart"></img>
                  </div>
                  <div className="col-md-4">
                    <img src={X} alt="X"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  shape: {
    width: "511px",
    height: "283px",

    background: "#EFFFF0",
    borderRadius: "40px",

    padding: "5px",
    paddingLeft: "60px"
  },

  tulisanSatu: {
    fontFamily: "Carter One",
    fontSize: "35px",

    color: "#000000"
  },

  tulisanDua: {
    fontFamily: "Roboto",
    fontSize: "18px"
  }
};
