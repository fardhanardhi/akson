import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayButton from "../assets/playButton.svg";
import LogoComplete from "../assets/logoComplete.svg";
import Background from "../assets/Background.svg";

export default class Home extends Component {
  render() {
    return (
      <div style={style.bgStyle}>
        <Link to="/usia">
          Usia
        </Link>
        <div className="container-fluid h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-12">
              <div className="row">
                <img
                  src={LogoComplete}
                  alt="logoComplete"
                  style={style.logoComStyle}
                ></img>
              </div>
              <div className="row">
                <div className="aks-btn" style={style.playBtnStyle}>
                  <Link to="/login">
                    <img src={PlayButton} alt="playbtn" />
                  </Link>
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
  bgStyle: {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Background})`,
    height: "100vh",
    backgroundSize: "100% auto"
  },
  logoComStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "auto",
    // margin: "auto",
    zIndex: "1"
  },

  playBtnStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: "auto",
    // margin: "auto",
    zIndex: "2"
  }
};
