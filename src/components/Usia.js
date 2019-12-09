import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class Usia extends Component {
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
                <div className="col-md-3">
                  <div style={style.cahaya}></div>
                </div>
                <div className="col-md-6 mt-3" style={style.fontJudul}>
                  <h2>Hai, {this.state.username}</h2>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div className="container mb-3 ml-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div style={style.fontIsi}>Berapa umur anda ?</div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div class="mt-4 noselect" style={style.wrapperStyle}>
            <Slider
              min={7}
              defaultValue={7}
              marks={{
                20: { style: style.fontIsi2, label: 7 },
                40: { style: style.fontIsi2, label: 8 },
                60: { style: style.fontIsi2, label: 9 },
                80: { style: style.fontIsi2, label: 10 },
                100: { style: style.fontIsi2, label: 11 }
              }}
              step={null}
              handleStyle={{
                border: "5px solid #3DAD47",
                height: 25,
                width: 25,
                marginLeft: 3,
                marginTop: -19,
                backgroundColor: "#FAFAFA"
              }}
              trackStyle={{
                backgroundColor: "#3DAD47",
                height: 10,
                marginTop: -13
              }}
              railStyle={{
                backgroundColor: "#FAFAFA",
                height: 10,
                marginTop: -13
              }}
              activeDotStyle={{
                border: "5px solid #3DAD47",
                height: 25,
                width: 25,
                marginLeft: -10,
                backgroundColor: "#FAFAFA"
              }}
              dotStyle={{
                border: "5px solid #3DAD47",
                height: 25,
                width: 25,
                marginLeft: -10,
                backgroundColor: "#FAFAFA"
              }}
            />
          </div>
          <div className="container mt-3">
            <div className="col-md-12">
              <div className="row">
                <div className="col"></div>
                <Link to="/menu">
                  <div
                    className="col-auto ml-3 mt-5 aks-btn"
                  >
                    <div className= "ml-2" style={style.kotakLain}>
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
                  </div>
                </Link>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  Kotak: {
    borderRadius: "34px",
    width: "734.65px",
    height: "290.66px",
    left: "319px",
    top: "215px",
    background: "linear-gradient(to right, #9BDBA1 50%, #62C16B 50%)",
    boxShadow: "20px 20px 0px rgb(195,181,179)"
  },

  fontJudul: {
    fontFamily: "Carter One",
    color: "#FAFAFA",
    marginLeft: "80px",
    marginTop: "70px",
    fontSize: "30px"
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
    fontSize: "30px"
  },

  fontIsi2: {
    color: "#FAFAFA",
    fontFamily: "Carter One",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "30px"
  },

  fontUsia: {
    fontFamily: "Carter One",
    color: "#FAFAFA",
    fontSize: "30px"
  },

  kotakLain: {
    background: "#117226",
    borderRadius: "15px",
    width: "300.79px",
    height: "64.02px",
    marginLeft: "64px",
    boxShadow: " 6px 6px 0px rgba(0, 0, 0, 0.15)"
  },

  wrapperStyle: { width: 500, marginLeft: 110 }
};
