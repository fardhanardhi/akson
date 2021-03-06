import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    const username = localStorage.getItem("username");
    this.setState({ username });
  }
  render() {
    return (
      <div>
        <div style={style.kotakDepan}>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <div style={style.bening}></div>
                </div>
                <div className="col-md-6" style={style.fontJudul}>
                  <h2>Hai, {this.state.username}</h2>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>

          <Link style={{ textDecoration: "none" }} to="/gameplay">
            <div className="aks-btn " style={style.kotakMain}>
              <div className="container">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-auto " style={style.fontLain}>
                      <div style={style.fontLain}>MAIN</div>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/statistics">
            <div className="aks-btn mt-3" style={style.kotakMain}>
              <div className="container">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-auto" style={style.fontLain}>
                      <div style={style.fontLain}>STATISTIK</div>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="aks-btn mt-5" style={style.kotakLain}>
              <div className="container">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-auto" style={style.fontLain}>
                      <div style={style.fontLain}>KELUAR</div>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const style = {
  kotakDepan: {
    borderRadius: "34px",
    width: "417.43px",
    height: "563.55px",
    marginTop: "20px",
    boxShadow: " 20px 20px 0px rgb(195,181,179)",
    background: "linear-gradient(to right, #9BDBA1 50%, #62C16B 50%)"
  },

  kiri: {
    width: "210px",
    height: "564px",
    background: "#62C16B",
    marginLeft: "208px",
    borderRadius: "0px 34px 34px 0px"
  },

  bening: {
    width: "13.15px",
    height: "72.78px",
    background: "#BBEABF",
    borderRadius: "7.5px",
    marginTop: "20px"
  },

  fontJudul: {
    fontFamily: "Carter One",
    color: "#FAFAFA",
    marginLeft: "20px",
    marginTop: "70px",
    webkitTextStroke: "5px rgba(255, 255, 255, 0.20)"
  },

  fontExit: {
    fontFamily: "Carter One",
    color: "#117226"
    // fontSize: "17px"
    // marginLeft: "20px"
    // marginTop: "70px"
  },

  kotakMain: {
    background: "#117226",
    borderRadius: "15px",
    width: "300.79px",
    height: "64.02px",
    marginLeft: "64px",
    marginTop: "65px",
    boxShadow: " 6px 6px 0px rgba(0, 0, 0, 0.15)"
  },

  kotakLain: {
    background: "#062b0e",
    borderRadius: "15px",
    width: "300.79px",
    height: "64.02px",
    marginLeft: "64px",
    boxShadow: " 6px 6px 0px rgba(0, 0, 0, 0.15)"
  },

  fontLain: {
    fontFamily: "Carter One",
    fontSize: "24px",
    color: "#FFFFFF",
    marginTop: "7px",
    textDecoration: "none"
  },

  fontKeluar: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "14px",
    color: "#e74c3c",
    marginTop: "10px",
    textDecoration: "underline"
  }
};
