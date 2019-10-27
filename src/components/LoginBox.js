import React, { Component } from "react";
import Gloss from "../assets/loginBoxGloss.svg";
import MasukBtn from "../assets/masukBtn.svg";
import RightHand from "../assets/rightHand.svg";
import LeftHand from "../assets/leftHand.svg";
import { Link } from "react-router-dom";

export default class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      isValid: null
    };
  }

  onLoginInput = event => {
    var usernameRegex = /^[a-z_-]+$/;
    if (event.target.value === "") {
      this.setState({ isValid: false });
    } else {
      if (usernameRegex.test(event.target.value)) {
        this.setState({
          isValid: true
        });
      } else {
        this.setState({
          isValid: false
        });
      }
    }
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="col-md-3" style={style.boxStyle}>
        <div>
          <img src={RightHand} alt="RH" style={style.rHandStyle} />
        </div>
        <div>
          <img src={Gloss} alt="RH" style={style.glossStyle} />
        </div>

        <h2 className="p-3" style={{ color: "#FFFFFF" }}>
          LOGIN
        </h2>
        <div className="row">
          <div className="col"></div>
          <div className="col-md-9 form-group pt-2">
            {/* {this.state.isValid ? "" : "huruf kecil"} */}
            <input
              type="text"
              className="form-control p-2"
              name="username"
              id="username"
              aria-describedby="helpId"
              placeholder="Username"
              onChange={this.onLoginInput}
            />
          </div>
          <div className="col"></div>
        </div>
        <Link to={this.state.username === "" ? null : "/menu"}>
          <img
            src={MasukBtn}
            alt="Masuk"
            className={
              this.state.username === "" ? 
              "p-4 aks-grayscale-filter" :
              this.state.isValid ?
              "p-4 aks-btn" :
              "p-4 aks-grayscale-filter"
            }
            onClick={() => this.validateForm()}
          />
        </Link>

        <div>
          <img src={LeftHand} alt="RH" style={style.lHandStyle} />
        </div>
      </div>
    );
  }
}
const style = {
  boxStyle: {
    marginTop: "15%",
    textAlign: "center",
    borderRadius: "35px",
    background: "linear-gradient(to right, #9BDBA1 50%, #62C16B 50%)"
  },
  lHandStyle: {
    position: "absolute",
    top: "60px",
    right: "-20px",
    zIndex: "4"
  },
  rHandStyle: {
    position: "absolute",
    top: "60px",
    left: "-20px",
    zIndex: "4"
  },
  glossStyle: {
    position: "absolute",
    top: "15px",
    left: "15px",
    zIndex: "4"
  }
};
