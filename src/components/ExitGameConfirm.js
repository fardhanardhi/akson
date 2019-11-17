import React from "react";
import icon from "../assets/icon.svg";
import X from "../assets/x.svg";
import Check from "../assets/check.svg";
import { Link } from "react-router-dom";

export default function ExitGameConfirm(props) {
  return (
    <div
      className="container-fluid justify-content-center"
      style={{
        opacity: props.show ? "1" : "0",
        transition: "all .8s",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "absolute",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        zIndex: 1,
        pointerEvents: props.show ? "auto" : "none"
      }}
    >
      <div style={styles.shape}>
        <div className="container mt-3">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <img src={icon} alt="icon"></img>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        <div className="container mt-1">
          <div className="col-md-12">
            <div className="mt-1" style={styles.tulisanSatu}>
              Apakah kamu yakin ingin mengakhiri game ini ?
            </div>
          </div>
        </div>
        <div className="container" style={styles.gambar}>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5">
                <Link to="/Menu">
                  <img
                    className="aks-btn"
                    src={Check}
                    alt="CheckButton"
                    href={props.referensi}
                    style={styles.imgButton}
                  ></img>
                </Link>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <img
                  className="aks-btn"
                  src={X}
                  alt="XButton"
                  style={styles.imgButton}
                  onClick={() => {
                    props.onBack();
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  shape: {
    width: "500px",
    height: "300px",

    background: "#EFFFF0",
    borderRadius: "40px",

    padding: "5px",
    paddingLeft: "60px"
  },

  tulisanSatu: {
    fontFamily: "Carter One",
    fontSize: "26px",
    marginRight: "50px",
    color: "#000000",
    textAlign: "center"
  },

  gambar: {
    marginTop: "10px",
    marginLeft: "5px"
  },

  imgButton: {
    cursor: "pointer"
  }
};
