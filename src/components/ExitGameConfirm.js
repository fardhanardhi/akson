import React, { Component } from "react";
import icon from "../assets/icon.svg";

export default class ExitGameConfirm extends Component {
  render() {
    return (
      <div style={styles.shape}>
        <div className="mt-4 ml-4" style={styles.tulisanSatu}>
          <p>Mencocokkan objek</p>
        </div>
        <div className="ml-5">
          <div className="container">
            <div className="col-md-12">
              <div className="row" styles={styles.tulisanDua}>
                Temukan objek yang berpasangan
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <img src={icon} alt="icon"></img>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  shape: {
    width: "511px",
    height: "387px",

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
