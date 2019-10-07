import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.svg";
import Logo from "../assets/logoAkson.svg";
import Boy from "../assets/loginBoy.svg";
import MasukBtn from "../assets/masukBtn.svg";
import RightHand from "../assets/rightHand.svg";
import LeftHand from "../assets/leftHand.svg";
import Gloss from "../assets/loginBoxGloss.svg";

export default class Login extends Component {
  render() {
    return (
      <div style={style.bgStyle}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <img src={Logo} alt="logoAkson" style={style.logoStyle}></img>

                  <div className="col-md-12" style={style.boyStyle}>
                    <img src={Boy} alt="loginBoy"></img>
                  </div>

                  <div className="col-md-12" style={{ position: "absolute" }}>
                    <div className="row">
                      <div className="col"></div>
                      <div className="col-md-3" style={style.boxStyle}>
                        <div>
                          <img src={RightHand} alt="RH" style={style.rHandStyle}/>
                        </div>
                        <div>
                          <img src={Gloss} alt="RH" style={style.glossStyle}/>
                        </div>
                        
                        

                        <h2 className="p-3" style={{color: "#FFFFFF"}}>LOGIN</h2>
                        <div className="row">
                          <div className="col"></div>
                          <div className="col-md-9 form-group pt-2">
                            <input
                              type="text"
                              className="form-control p-2"
                              name="username"
                              id="username"
                              aria-describedby="helpId"
                              placeholder="Username"
                            />
                          </div>
                          <div className="col"></div>
                        </div>
                          <img src={MasukBtn} alt="Masuk" className="p-4" />

                        <div>
                          <img src={LeftHand} alt="RH" style={style.lHandStyle}/>
                        </div>
                      </div>
                      <div className="col"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12"></div>
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
    fontFamily: "Carter One"
  },
  boyStyle: {
    textAlign: "center"
  },
  logoStyle: {
    right: "0",
    position: "absolute"
  },
  boxStyle: {
    marginTop: "15%",
    textAlign: "center",
    borderRadius: "35px",
    background: "linear-gradient(to right, #9BDBA1 50%, #62C16B 50%)"
  },
  lHandStyle: {
    position: "absolute",
    top: "60px",
    right: "-20px",
    zIndex: "4"
  },
  rHandStyle: {
    position: "absolute",
    top: "60px",
    left: "-20px",
    zIndex: "4"
  },
  glossStyle: {
    position: "absolute",
    top: "15px",
    left: "15px",
    zIndex: "4"
  }
};
