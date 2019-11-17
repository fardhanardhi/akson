import React, { Component } from "react";
import score from "../assets/score.svg";
import checkScore from "../assets/checkScore.svg";
import errorScore from "../assets/errorScore.svg";
import Home from "../assets/Home.svg";
import ThermoBlue from "../components/ThermoBlue";

import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.state = { finalScore: 0, onlineScore: 0 };
  }

  componentDidMount() {
    axios.get(`https://api-akson.000webhostapp.com/scoreAvg`).then(res => {
      this.setState({ onlineScore: Number(res.data.average) });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prev", prevProps.show);
    console.log("curr", this.props.show);

    if (!prevProps.show && this.props.show) {
      this.setState(
        {
          finalScore:
            this.props.correctScore * 10 - this.props.wrongScore * 5 < 0
              ? 0
              : this.props.correctScore * 10 - this.props.wrongScore * 5
        },
        () => {
          axios
            .get(
              `https://api-akson.000webhostapp.com/addScore/${this.state.finalScore}`
            )
            .then(res => {
              console.log(res.data);
            })
            .catch(error => {
              // handle error
              console.log(error);
            });

          const username = localStorage.getItem("username");

          let data = JSON.parse(localStorage.getItem("data"));
          if (data == null) {
            data = [{ username, score: this.state.finalScore }];
          } else {
            data = [...data, { username, score: this.state.finalScore }];
          }
          localStorage.setItem("data", JSON.stringify(data));
        }
      );
    }
  }

  render() {
    return (
      <div
        className="container-fluid justify-content-center"
        style={{
          opacity: this.props.show ? "1" : "0",
          transition: "all .8s",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          position: "absolute",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          zIndex: 1,
          pointerEvents: this.props.show ? "auto" : "none"
        }}
      >
        <div style={style.box}>
          <div style={style.fontSatu}>Permainan Selesai</div>
          <div className="container">
            <div className="col-md-12 ml-3 mt-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={score} alt="score"></img>
                    </div>
                    <div className="col-md-2" style={style.fontDua}>
                      {this.state.finalScore}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={checkScore} alt="Check Score"></img>
                    </div>
                    <div className="col-md-2" style={style.fontDua}>
                      {this.props.correctScore}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={errorScore} alt="Error Score"></img>
                    </div>
                    <div className="col-md-2" style={style.fontDua}>
                      {this.props.wrongScore}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container ml-4 mt-4">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                      <ThermoBlue
                        id="thermo1"
                        progress={
                          this.state.finalScore < this.state.onlineScore
                            ? (this.state.finalScore / this.state.onlineScore) *
                              100
                            : 100
                        }
                        color="#F3B431"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-3">
                      <ThermoBlue
                        id="thermo2"
                        progress={
                          this.state.onlineScore < this.state.finalScore
                            ? (this.state.onlineScore / this.state.finalScore) *
                              100
                            : 100
                        }
                        color="#3498DB"
                      />
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={style.fontTiga}>
            <div className="col-md-12 mt-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="row ml-5">Pencapaian saya</div>
                </div>
                <div className="col-md-6">Pencapaian rata-rata</div>
              </div>
            </div>
          </div>
          <div style={style.Home}>
            <Link to="/Menu">
              <img src={Home} alt="home icon"></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  box: {
    background: "#EFFFF0",
    borderRadius: "50px",
    width: "380px",
    height: "471px"
  },

  fontSatu: {
    fontFamily: "Carter One",
    fontSize: "29px",
    color: "#1D1D1D",
    marginLeft: "60px",
    marginTop: "20px"
  },

  fontDua: {
    fontFamily: "Carter One",
    fontSize: "19px",
    color: "#1D1D1D"
  },

  fontTiga: {
    fontFamily: "Carter One",
    fontSize: "14px",
    color: "#1D1D1D"
  },

  Home: {
    paddingLeft: "150px",
    paddingTop: "50px"
  }
};
