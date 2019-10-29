import React, { Component } from "react";
import Animal from "../assets/imgCount/Animal.svg";
import Animal2 from "../assets/imgCount/Animal2.svg";
import Apples from "../assets/imgCount/Apples.svg";
import Apples2 from "../assets/imgCount/Apples2.svg";
import Apples3 from "../assets/imgCount/Apples3.svg";
import Duck from "../assets/imgCount/Ducks.svg";
import Duck2 from "../assets/imgCount/Ducks2.svg";
import Monkey from "../assets/imgCount/Monkey.svg";
import Mushroom from "../assets/imgCount/Mushroom.svg";
import Sunflower from "../assets/imgCount/Sunflower.svg";
import Sunflower2 from "../assets/imgCount/Sunflower2.svg";
import Sunflower3 from "../assets/imgCount/Sunflower3.svg";
import Turtles from "../assets/imgCount/Turtles.svg";
import Turtles2 from "../assets/imgCount/Turtles2.svg";
import GameHeader from "./GameHeader";

export default class CountTheObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soal: [
        {
          image: Animal,
          pertanyaan: [
            {
              text: "berapa jumlah hewan yang ada?",
              pilihanJawaban: [
                {
                  text: "17",
                  isBenar: true
                },
                {
                  text: "15",
                  isBenar: false
                },
                {
                  text: "19",
                  isBenar: false
                },
                {
                  text: "20",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah bebek berwarna coklat?",
              pilihanJawaban: [
                {
                  text: "4",
                  isBenar: true
                },
                {
                  text: "3",
                  isBenar: false
                },
                {
                  text: "2",
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
          image: Animal2,
          pertanyaan: [
            {
              text: "berapa jumlah hewan yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: false
                },
                {
                  text: "5",
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
          image: Apples,
          pertanyaan: [
            {
              text: "berapa jumlah semua apel pada gambar?",
              pilihanJawaban: [
                {
                  text: "13",
                  isBenar: true
                },
                {
                  text: "17",
                  isBenar: false
                },
                {
                  text: "11",
                  isBenar: false
                },
                {
                  text: "10",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Apples2,
          pertanyaan: [
            {
              text: "berapa jumlah buah berwarna merah?",
              pilihanJawaban: [
                {
                  text: "21",
                  isBenar: false
                },
                {
                  text: "25",
                  isBenar: false
                },
                {
                  text: "20",
                  isBenar: true
                },
                {
                  text: "26",
                  isBenar: true
                }
              ]
            },
            {
              text: "berapa jumlah buah berwarna kuning ?",
              pilihanJawaban: [
                {
                  text: "16",
                  isBenar: true
                },
                {
                  text: "14",
                  isBenar: false
                },
                {
                  text: "13",
                  isBenar: false
                },
                {
                  text: "12",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Apples3,
          pertanyaan: [
            {
              text: "berapa jumlah semua apel pada gambar?",
              pilihanJawaban: [
                {
                  text: "14",
                  isBenar: true
                },
                {
                  text: "17",
                  isBenar: false
                },
                {
                  text: "11",
                  isBenar: false
                },
                {
                  text: "10",
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah semua jamur pada gambar?",
              pilihanJawaban: [
                {
                  text: "14",
                  isBenar: false
                },
                {
                  text: "10",
                  isBenar: true
                },
                {
                  text: "12",
                  isBenar: false
                },
                {
                  text: "13",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Duck,
          pertanyaan: [
            {
              text: "berapa jumlah bebek putih yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: false
                },
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
                }
              ]
            }
          ]
        },
        {
          image: Duck2,
          pertanyaan: [
            {
              text: "berapa jumlah bebek yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: false
                },
                {
                  text: "5",
                  isBenar: false
                },
                {
                  text: "4",
                  isBenar: true
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
          image: Monkey,
          pertanyaan: [
            {
              text: "berapa jumlah monyet yang ada?",
              pilihanJawaban: [
                {
                  text: "7",
                  isBenar: true
                },
                {
                  text: "5",
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
            }
          ]
        },
        {
          image: Mushroom,
          pertanyaan: [
            {
              text: "berapa jumlah jamur berwarna merah?",
              pilihanJawaban: [
                {
                  text: "10",
                  isBenar: true
                },
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
                  isBenar: false
                }
              ]
            },
            {
              text: "berapa jumlah jamur berwarna biru?",
              pilihanJawaban: [
                {
                  text: "10",
                  isBenar: false
                },
                {
                  text: "9",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: true
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
          image: Sunflower,
          pertanyaan: [
            {
              text: "berapa jumlah bunga matahari yang utuh?",
              pilihanJawaban: [
                {
                  text: "9",
                  isBenar: true
                },
                {
                  text: "8",
                  isBenar: false
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
            }
          ]
        },
        {
          image: Sunflower2,
          pertanyaan: [
            {
              text: "berapa jumlah bunga matahari?",
              pilihanJawaban: [
                {
                  text: "9",
                  isBenar: true
                },
                {
                  text: "8",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: false
                },
                {
                  text: "10",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Sunflower3,
          pertanyaan: [
            {
              text: "berapa jumlah bunga matahari?",
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
                  text: "3",
                  isBenar: false
                },
                {
                  text: "6",
                  isBenar: false
                }
              ]
            }
          ]
        },
        {
          image: Turtles,
          pertanyaan: [
            {
              text: "berapa jumlah kura-kura pada gambar?",
              pilihanJawaban: [
                {
                  text: "5",
                  isBenar: false
                },
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
                  isBenar: true
                }
              ]
            }
          ]
        },
        {
          image: Turtles2,
          pertanyaan: [
            {
              text: "berapa jumlah kura-kura pada gambar?",
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
                  text: "3",
                  isBenar: false
                }
              ]
            }
          ]
        }
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
