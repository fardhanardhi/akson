import React, { Component } from "react";
import MenuGame from "../components/MenuGame.js";
import Background from "../assets/Background.svg";
import LogoAkson from "../assets/logoAkson.svg";

export default class Menu extends Component {
  render() {
    return (
      <div style={style.bgStyle}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <img src={LogoAkson} alt="logoAkson" style={style.logo}></img>
                <div className="col-md-12"></div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-md-3 d-flex justify-content-center" style={style.menuTengah}>
                      <MenuGame />
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
    );
  }
}

const style = {
  menuTengah: {
    minHeight: "90vh",  
    display: "flex",
    alignItems: "center"
  },

  bgStyle: {
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundImage: `url(${Background})`
  },

  logo: {
    right: "0",
    position: "absolute",
    marginTop:"30px"
  }
};
