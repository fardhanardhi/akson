import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayButton from "../assets/playButton.svg";
import LogoComplete from "../assets/logoComplete.svg";
import Background from "../assets/Background.svg";

export default class Home extends Component {
  render() {
    return (
      <div style={style.bgStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/permainan">Permainan</Link>
            </li>
            <li>
              <Link to="/gameplay">GamePlay</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/statistics">Statistic</Link>
            </li>
          </ul>
        </nav>
        <div className="container-fluid ">
          <div style={style.nganu} className="row">
            <div className="col-md-12">
              <div className="row">
                <img
                  src={LogoComplete}
                  alt="logoComplete"
                  style={style.logoComStyle}
                ></img>
              </div>
              <div class="row">
                <a href="/login" className="aks-btn" style={style.playBtnStyle}>
                  <img
                    src={PlayButton}
                    alt="playbtn"
                  />
                </a>
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
    height: "100vh"
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
