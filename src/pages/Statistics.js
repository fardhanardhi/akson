import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.svg";
import LeftArrow from "../assets/leftArrow.svg";
import Logo from "../assets/logoAkson.svg";
// import * as React from "react";
// import { render } from "react-dom";
import GlobalStat from "../components/GlobalStat";
import UserStat from "../components/UserStat";

export default class Statistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      score: []
    };
  }

  componentDidMount() {
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <img src={Logo} alt="logoAkson" style={style.logoStyle}></img>

                  <div className="row">
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
                          <div className="col">
                            <GlobalStat />
                          </div>
                          <div className="col-8">
                            <UserStat userScore={this.state.score} />
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
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Background})`,
    height: "100vh"
  },

  logoStyle: {
    right: "0",
    position: "absolute",
    zIndex: "0"
  },

  whiteContainerStyle: {
    boxShadow: "10px 10px 5px grey",
    // align: "center",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: "35px",
    height: "500px"
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
  }
};
