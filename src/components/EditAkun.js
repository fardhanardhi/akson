import React, { Component } from "react";

import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";

export default class EditAkun extends Component {
  log = value => {
    console.log(value); //eslint-disable-line
  };

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
        <div style={style.Kotak}>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2">
                  <div style={style.cahaya}></div>
                </div>
                <div className="col-md-4 mt-5" style={style.fontJudul}>
                  {/* <h2>Hai, {this.state.username}</h2> */}
                  <h4>Nama :</h4>
                </div>
                <div className="col-md-4 mt-5" style={style.fontJudul}>
                  <h4>Panji</h4>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
          <div className="container mb-3">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 mt-4" style={style.fontJudul}>
                  <h4>Umur :</h4>
                </div>
                <div className="col-md-2 mt-4" style={style.fontJudul}>
                  <h4>7</h4>
                </div>
                <div className="col-auto" style={style.kotakLain}>
                  <h4 style={style.fontJudul}>+</h4>
                </div>
              </div>
            </div>
          </div>
           {/* <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col"></div>
                <Link to ="/menu">
                  <div
                    className="col-auto ml-3 mt-5 aks-btn"
                    style={style.kotakLain}
                  >
                    <div className="container">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col"></div>
                          <div className="col-auto">
                            <div style={style.fontUsia} className="mt-2">
                              KIRIM
                            </div>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="col"></div>
              </div>
            </div> */}
          </div>
        </div>
    //   </div>
    );
  }
}

const style = {
  Kotak: {
    borderRadius: "34px",
    width: "450px",
    height: "220px",
    left: "319px",
    top: "215px",
    background: "linear-gradient(to right, #9BDBA1 50%, #62C16B 50%)",
    boxShadow: "20px 20px 0px rgb(195,181,179)"
  },

  fontJudul: {
    fontFamily: "Carter One",
    color: "#FAFAFA"
  },

  cahaya: {
    width: "13.15px",
    height: "72.78px",
    background: "#BBEABF",
    borderRadius: "7.5px",
    marginTop: "10px"
  },

  fontIsi: {
    color: "#FAFAFA",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px"
  },

  fontUsia: {
    fontFamily: "Carter One",
    color: "#FAFAFA",
    fontSize: "30px"
  },

  kotakLain: {
    background: "#117226",
    borderRadius: "5px",
    width: "20px",
    height: "20px",
    marginTop: "30px",
    boxShadow: " 4px 4px 0px rgba(0, 0, 0, 0.15)"
  }
};
