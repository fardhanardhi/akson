import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.svg";
import LeftArrow from "../assets/leftArrow.svg";
import LineChart from "../assets/lineChart.svg";
import BarsChart from "../assets/barsChart.svg";
// import Logo from "../assets/logoAkson.svg";
// import * as React from "react";
// import { render } from "react-dom";
import GlobalStat from "../components/GlobalStat";
import UserStat from "../components/UserStat";

export default class Statistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      score: [],
      isChartLine: true
    };
  }

  componentWillMount() {
    // var simpanan = [
    //   {username :  "rafif", score:"1870"},
    //   {username :  "adan", score:"2180"},
    //   {username :  "vian", score:"2345"},
    //   {username :  "panji", score:"764"},
    //   {username :  "adan", score:"1321"},
    //   {username :  "rafif", score:"1221"},
    //   {username :  "panji", score:"312"},

    // ];
    const username = localStorage.getItem("username");
    this.setState({ username });
    // var simpanans = [...simpanan, {username: this.state.username, score: ""}];
    // localStorage.setItem("data", JSON.stringify(simpanan));

    const data = JSON.parse(localStorage.getItem("data"));

    // console.log(data);
    const hasilScore =
      data == null
        ? []
        : data
            .filter(item => item.username === username)
            .map(item => {
              return Number(item.score);
            });

    this.setState({ score: hasilScore });

    console.log(hasilScore);
  }

  render() {
    return (
      <div style={style.bgStyle}>
        {/* <img src={Logo} alt="logoAkson" style={style.logoStyle}></img> */}
        <div className="container-fluid h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="row" style={style.rowStyle}>
                    <div
                      className="col-md text-center "
                      style={style.whiteContainerStyle}
                    >
                      <Link to="/Menu">
                        <img
                          alt="leftArrow"
                          src={LeftArrow}
                          style={style.lArrowStyle}
                        ></img>
                      </Link>
                      <h4 style={style.titleStyle}>Statistikmu</h4>
                      <div className={"my-pretty-chart-container "}>
                        <div className="row">
                          {this.state.isChartLine ? (
                            <div className="col-12">
                              <UserStat userScore={this.state.score} />
                            </div>
                          ) : (
                            <div className="col-12">
                              <GlobalStat />
                            </div>
                          )}
                        </div>
                        <div className="row">
                          <div className="col-4"></div>
                          <div className="col-1">
                            <img
                              className="aks-btn"
                              src={LineChart}
                              alt="lineChartIcon"
                              onClick={() =>
                                this.setState({ isChartLine: true })
                              }
                              style={
                                this.state.isChartLine
                                  ? style.btnStatsSelected
                                  : null
                              }
                            />
                            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                          </div>
                          <div className="col-2"></div>
                          <div className="col-1">
                            <img
                              className="aks-btn"
                              src={BarsChart}
                              alt="barsChartIcon"
                              onClick={() =>
                                this.setState({ isChartLine: false })
                              }
                              style={
                                !this.state.isChartLine
                                  ? style.btnStatsSelected
                                  : null
                              }
                            />
                            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
    backgroundRepeat: "repeat",
    backgroundImage: `url(${Background})`,
    height: "100vh",
    overflow: "hidden"
  },

  logoStyle: {
    right: 30,
    top: 30,
    position: "absolute",
    zIndex: "0"
  },

  rowStyle: {
    height: "100%",
    position: "relative",
    width: "80%",
    margin: "auto"
  },

  whiteContainerStyle: {
    boxShadow: "10px 10px 5px grey",
    // align: "center",
    margin: "auto",
    paddingTop: "auto",
    paddiongBottom: "auto",
    paddingLeft: "20px",
    paddingRight: "20px",
    // msTransform: "translateY(25%)",
    // transform: "translateY(25%)",
    backgroundColor: "#FFFFFF",
    borderRadius: "35px",
    height: "600px"
    // position: "absolute"
  },
  lArrowStyle: {
    position: "absolute",
    left: "15px",
    top: "15px",
    zIndex: "3"
  },
  titleStyle: {
    fontFamily: "Carter One",
    marginTop: "25px",
    zIndex: "3"
  },
  btnStatsSelected: {
    transform: "scale(1.25)"
  }
};
