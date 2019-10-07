import React, { Component } from "react";

export default class MenuGame extends Component {
  render() {
    return (
      <div>
        <div style={style.kotakDepan}>
          <div class="container">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-3">
                  <div style={style.bening}></div>
                </div>
                <div class="col-md-6" style={style.fontJudul}>
                  <h2>Hai, User</h2>
                </div>
                <div class="col-md-3"></div>
              </div>
            </div>
          </div>
          <div style={style.kotakMain}>
            <div class="container">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6 ml-3" style={style.fontLain}>
                    MAIN
                  </div>
                  <div class="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div style={style.kotakLain}>
            <div class="container">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6" style={style.fontLain}>
                    STATISTIK
                  </div>
                  <div class="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div style={style.kotakLain}>
            <div class="container">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-6 ml-2" style={style.fontLain}>
                    KELUAR
                  </div>
                  <div class="col-md-3"></div>
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
    marginTop: "70px"
  },

  kotakMain: {
    background: "#117226",
    borderRadius: "15px",
    width: "300.79px",
    height: "64.02px",
    marginLeft: "64px",
    marginTop: "80px",
    boxShadow: " 6px 6px 0px rgba(0, 0, 0, 0.15)"
  },

  kotakLain: {
    background: "#117226",
    borderRadius: "15px",
    width: "300.79px",
    height: "64.02px",
    marginLeft: "64px",
    marginTop: "30px",
    boxShadow: " 6px 6px 0px rgba(0, 0, 0, 0.15)"
  },

  fontLain: {
    fontFamily: "Carter One",
    fontSize: "24px",
    color: "#FFFFFF",
    marginTop: "10px"
  }
};
