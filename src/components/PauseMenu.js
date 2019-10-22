import React from "react";
import Play from "../assets/play.svg";
import Restart from "../assets/restart.svg";
import X from "../assets/x.svg";
// import ExitGameCon from "../components/ExitGameConfirm"

export default function PauseMenu(props) {
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
      <div>
        <div
          style={{
            transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
            transition: "all .8s"
          }}
        >
          <div style={style.shape} className="aks-unblur">
            <div className="mt-3 ml-4" style={style.tulisanSatu}>
              Paused
            </div>
            <div className="mt-4 mr-5">
              <div className="container" style={style.btnLayout}>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="aks-btn"
                        src={Play}
                        alt="Play"
                        onClick={() => {
                          props.onPlay();
                        }}
                        style={style.imgButton}
                      ></img>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="aks-btn"
                        src={Restart}
                        alt="Restart"
                        style={style.imgButton}
                        onClick={() => { 
                          props.onRestart();
                        }}
                      ></img>
                    </div>
                    <div className="col-md-4">
                      <img
                        className="aks-btn"
                        src={X}
                        alt="X"
                        style={style.imgButton}
                        onClick={() => { 
                          props.onExit();
                        }}
                      >
                      </img>
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

const style = {
  wrapper: {
    position: "absolute"
  },
  shape: {
    width: "500px",
    height: "230px",

    background: "#EFFFF0",
    borderRadius: "40px",

    padding: "5px",
    paddingLeft: "auto",
    paddingRight: "auto",
  },

  tulisanSatu: {
    fontFamily: "Carter One",
    fontSize: "35px",
    color: "#000000",
    textAlign : "center",
  },

  tulisanDua: {
    display: "block",
    fontFamily: "Roboto",
    fontSize: "18px",
    paddingLeft: "auto",
    paddingRight: "auto",
    textAlign: "center",
  },
  imgButton: {
    cursor: "pointer"
  },
  btnLayout:{
    marginTop: "10px",
    marginLeft: "40px"
  }
};
