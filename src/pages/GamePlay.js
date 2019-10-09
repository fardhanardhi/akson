import React, { Component } from "react";
// import { Link } from "react-router-dom";

import GameHeader from "../components/GameHeader";
import FindThePairs from "../components/FindThePairs";
// import ShapeAndPattern from "../components/ShapeAndPattern";
import PauseMenu from "../components/PauseMenu";

export default class GamePlay extends Component {
  state = {
    score: 15,
    paused: false
  };

  onPause = () => {
    this.setState({ paused: true });
  };

  onPlay = () => {
    this.setState({ paused: false });
  };

  render() {
    return (
      <div>
        <PauseMenu show={this.state.paused} onPlay={this.onPlay} />
        <div
          className={`container-fluid p-0 ${
            this.state.paused ? "aks-blur" : "aks-nonblur"
          }`}
          style={styles.wrapper}
        >
          <GameHeader
            score={this.state.score}
            onTimeOut={() => alert("Time Out")}
            paused={this.state.paused}
            onPause={() => {
              this.onPause();
            }}
          />
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "85%" }}
          >
            <FindThePairs />
          </div>
          {/* <ShapeAndPattern /> */}
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: "#FFEBD2",
    height: "100vh",
    transition: "filter 0.5s ease"
  }
};
