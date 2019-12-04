import React, { Component } from 'react'
import LogoAkson from "../assets/logoAkson.svg";
import Background from "../assets/Background.svg";
import Usia from "../components/Usia";

export default class InputUmur extends Component {
    render() {
        return (
            <div style={style.bgStyle}>
            <img src={LogoAkson} alt="logoAkson" style={style.logo}></img>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12"></div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col"></div>
                        <div
                          className="col-md-3 d-flex justify-content-center"
                          style={style.menuTengah}
                        >
                          <Usia />
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
        )
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
      backgroundImage: `url(${Background})`,
      backgroundSize: "100% auto"
    },
  
    logo: {
      right: 30,
      top: 10,
      position: "absolute",
      marginTop: "30px"
    }
  };