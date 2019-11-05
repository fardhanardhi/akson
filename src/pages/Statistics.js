import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/Background.svg";
import LeftArrow from "../assets/leftArrow.svg";
import Logo from "../assets/logoAkson.svg";
// import * as React from "react";
// import { render } from "react-dom";
import { Chart } from "react-google-charts";
import axios from 'axios';

export default class Statistics extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       average: ""
    }
  }
  
  componentDidMount() {
    axios.get(`https://api-akson.000webhostapp.com/scoreAvg`)
      .then(res => {        
        this.setState({ average: res.data.average });
      })
  }

  render() {
    return (
      <div style={style.bgStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <img src={Logo} alt="logoAkson" style={style.logoStyle}></img>

                  <div className="row">
                    <div className="col"></div>

                    <div
                      className="col-md-auto text-center "
                      style={style.whiteContainerStyle}
                    >
                      <a href="/Menu">
                      <img alt="leftArrow" src={LeftArrow} style={style.lArrowStyle} >
                      </img>
                      </a>
                      <h4 style={style.titleStyle}>Statistikmu</h4>
                      <div className={"my-pretty-chart-container "}>
                        <Chart
                          width={"750px"}
                          height={"400px"}
                          chartType="ColumnChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ["Kriteria", "Poin", { role: "style" }, { role: "annotation" }],
                            ["Terbaik", 100, "#3498DB", 100],
                            ["Rata-rata", this.state.average, "#5EDA6A", this.state.average],
                            ["Baru Saja", 25, "#F3B431", 25]
                          ]}
                          options={{
                            // Material design options                            
                            bar: { groupWidth: "50%" },
                            hAxis: {
                              textStyle: {
                                color: "#1D1D1D",
                                fontName: "Carter One"
                              }
                            },
                            vAxis: {
                              textStyle: {
                                color: "#1D1D1D",
                                fontName: "Carter One"
                              }
                            },
                            annotation: {
                              textStyle: {
                                color: "#FFFFFF",
                                fontName: "Carter One"
                              }
                            },
                            legend: { position: "none" }
                          }}
                          // For tests
                          
                        />
                      </div>
                    </div>

                    <div className="col"></div>
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
    backgroundColor:"#FFFFFF",
    borderRadius:"35px",
    height:"500px"
    
  },
  lArrowStyle: {
    position: "absolute",
    left: "15px",
    top: "15px",
    zIndex: "3"
  },
  titleStyle:{
    fontFamily:"Carter One",
    marginTop: "25px",
    zIndex: "3"
  }

};
