import React, { Component } from "react";

import AnakBermain from "../assets/imgCount/AnakBermain.jpg";
import Apel from "../assets/imgCount/Apel.jpg";
import Bangku from "../assets/imgCount/Bangku.jpg";
import Bebek from "../assets/imgCount/Bebek.jpg";
import Binatang from "../assets/imgCount/Binatang.jpg";
import Bunga from "../assets/imgCount/Bunga.jpg";
import Bunga2 from "../assets/imgCount/Bunga2.jpg";
import BungaMatahari from "../assets/imgCount/BungaMatahari.jpg";
import Burung from "../assets/imgCount/Burung.jpg";
import Burung2 from "../assets/imgCount/Burung2.jpg";
import BurungPelikan from "../assets/imgCount/BurungPelikan.jpg";
import Ikan from "../assets/imgCount/Ikan.jpg";
import Ikan2 from "../assets/imgCount/Ikan2.jpg";
import Orang from "../assets/imgCount/Orang.jpg";
import OrangTaman from "../assets/imgCount/OrangTaman.jpg";

import GameHeader from "./GameHeader";

export default class CountTheObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soal: [
        {
          image: AnakBermain,
          pertanyaan: [
            {
              text: "berapa jumlah anak yang bermain?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: true
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "8",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah pohon yang ada?",
              pilihanJawaban: [
                {
                  text: "3",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "2",
                  isBenar: true
                },
                {
                  text: "1",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Apel,
          pertanyaan: [
            {
              text: "berapa jumlah apel yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: true
                }
              ]
            },
            {
              text: "berapa jumlah bunga yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: false
                },
                {
                  text: "9",
                  isBenar: true
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Bangku,
          pertanyaan: [
            {
              text: "berapa jumlah bangku yang ada di taman?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: true
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah perahu yang ada di danau?",
              pilihanJawaban: [
                {
                  text: "2",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "3",
                  isBenar: true
                }
              ]
            }
          ]
        },
        {
          image: Bebek,
          pertanyaan: [
            {
              text: "berapa jumlah bebek yang mengapung?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: true
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah bebek yang ada?",
              pilihanJawaban: [
                {
                  text: "2",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: true
                },
                {
                  text: "3",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Binatang,
          pertanyaan: [
            {
              text: "berapa jumlah binatang yang ada pada gambar?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: true
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah bunga yang ada pada gambar?",
              pilihanJawaban: [
                {
                  text: "10",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: false
                },
                {
                  text: "8",
                  isBenar: false
                },
                {
                  text: "9",
                  isBenar: true
                }
              ]
            }
          ]
        },
        {
          image: Bunga,
          pertanyaan: [
            {
              text: "berapa jumlah bunga yang ada pada gambar?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: true
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Bunga2,
          pertanyaan: [
            {
              text: "berapa jumlah bunga yang ada pada gambar?",
              pilihanJawaban: [
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: true
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah pohon yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: false
                },
                {
                  text: "10",
                  isBenar: false
                },
                {
                  text: "8",
                  isBenar: false
                },
                {
                  text: "9",
                  isBenar: true
                }
              ]
            },
            {
              text: "berapa jumlah kupu-kupu yang berterbangan?",
              pilihanJawaban: [
                {
                  text: "1",
                  isBenar: false
                },
                {
                  text: "2",
                  isBenar: true
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "3",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: BungaMatahari,
          pertanyaan: [
            {
              text: "berapa jumlah bunga matahari yang ada pada gambar?",
              pilihanJawaban: [
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "8",
                  isBenar: false
                },
                {
                  text: "9",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: true
                }
              ]
            },
          ]
        },
        {
          image: Burung,
          pertanyaan: [
            {
              text: "berapa jumlah burung yang ada pada gambar?",
              pilihanJawaban: [
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "8",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: true
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
          ]
        },
        {
          image: Burung2,
          pertanyaan: [
            {
              text: "berapa jumlah burung yang terbang?",
              pilihanJawaban: [
                {
                  text: "6",
                  isBenar: true
                },
                {
                  text: "8",
                  isBenar: false
                },
                {
                  text: "9",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
          ]
        },
        {
          image: BurungPelikan,
          pertanyaan: [
            {
              text: "berapa jumlah burung pelikan yang terbang?",
              pilihanJawaban: [
                {
                  text: "1",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "3",
                  isBenar: false
                },
                {
                  text: "2",
                  isBenar: true
                }
              ]
            },
          ]
        },
        {
          image: Ikan,
          pertanyaan: [
            {
              text: "berapa jumlah ikan yang berenang?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: true
                },
                {
                  text: "2",
                  isBenar: false
                },
                {
                  text: "3",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah ikan badut yang berenang?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "2",
                  isBenar: true
                },
                {
                  text: "3",
                  isBenar: false
                }
              ]
            },
          ]
        },
        {
          image: Ikan2,
          pertanyaan: [
            {
              text: "berapa jumlah ikan yang berenang?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: true
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa ubur-ubur yang berenang?",
              pilihanJawaban: [
                {
                  text: "1",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "3",
                  isBenar: false
                },
                {
                  text: "2",
                  isBenar: true
                }
              ]
            },
          ]
        },
        {
          image: Orang,
          pertanyaan: [
            {
              text: "berapa orang yang ada di taman?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "7",
                  isBenar: true
                },
                {
                  text: "6",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah awan yang ada?",
              pilihanJawaban: [
                {
                  text: "9",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "8",
                  isBenar: true
                },
                {
                  text: "7",
                  isBenar: false
                }
              ]
            },
          ]
        },
        {
          image: OrangTaman,
          pertanyaan: [
            {
              text: "berapa orang yang ada di taman?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: true
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "8",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah pohon yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: true
                },
                {
                  text: "3",
                  isBenar: false
                }
              ]
            },
          ]
        },      
      ]
    };
  }

  getRandomImage = ArImg => {
    var num = Math.floor(Math.random() * ArImg.length);
    var img = ArImg[num];
    var num2 = Math.floor(Math.random() * img.pertanyaan.length);
    var qst = img.pertanyaan[num2];
    var jwb = qst.pilihanJawaban;
    for (var i = jwb.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = jwb[i];
      jwb[i] = jwb[j];
      jwb[j] = temp;
    }
    var jwb1 = jwb[0];
    var jwb2 = jwb[1];
    var jwb3 = jwb[2];
    var jwb4 = jwb[3];
    return {
      img,
      qst,
      jwb,
      jwb1,
      jwb2,
      jwb3,
      jwb4
    };
  };

  render() {
    const soal = this.getRandomImage(this.state.soal);
    const soalGambar = soal.img;
    const soalTanya = soal.qst;
    const soalJawaban1 = soal.jwb1;
    const soalJawaban2 = soal.jwb2;
    const soalJawaban3 = soal.jwb3;
    const soalJawaban4 = soal.jwb4;
    return (
      console.log(soalTanya.pilihanJawaban),
      (
        <div className="container-fluid p-0">
          {this.props.gameInfo == null ? null : (
            <GameHeader
              gameInfo={this.props.gameInfo}
              onTimeOut={this.props.onTimeOut}
              paused={this.props.paused}
              onPause={this.props.onPause}
              ref={this.headerRef}
            />
          )}
          <div className="row">
            <div className="col"></div>
            <div className="col-md-8" style={style.pertanyaanStyle}>
              <div className="row">
                <h1>{soalTanya.text}</h1>
                <div className="col-2"></div>
                <div className="col-8">
                  <img
                    src={soalGambar.image}
                    alt="countImage"
                    style={style.imageStyle}
                  />
                </div>
                <div className="col"></div>
              </div>
              <div className="row" style={style.buttonGroup}>
                <div className="col-3">
                  <button
                    style={style.buttonSyle}
                    onClick={() => console.log(soalJawaban1.isBenar)}
                  >
                    {soalJawaban1.text}
                  </button>
                </div>
                <div className="col-3">
                  <button
                    style={style.buttonSyle}
                    onClick={() => console.log(soalJawaban2.isBenar)}
                  >
                    {soalJawaban2.text}
                  </button>
                </div>
                <div className="col-3">
                  <button
                    style={style.buttonSyle}
                    onClick={() => console.log(soalJawaban3.isBenar)}
                  >
                    {soalJawaban3.text}
                  </button>
                </div>
                <div className="col-3">
                  <button
                    style={style.buttonSyle}
                    onClick={() => console.log(soalJawaban4.isBenar)}
                  >
                    {soalJawaban4.text}
                  </button>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )
    );
  }
}

const style = {
  imageStyle: {
    maxHeight: "400px",
    maxWidth: "500px"
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  pertanyaanStyle: {
    fontWeight: "normal",
    fontFamily: "Carter One"
  },
  buttonSyle: {
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    radiusBorder: "5px"
  },
  buttonGroup: {
    marginTop: "25px"
  }
};
