import React, { Component } from "react";
// import { Link } from "react-router-dom";

import colors from "../assets/colors";
import objects from "../assets/objects";

import GameHeader from "../components/GameHeader";
import FindThePairs from "../components/FindThePairs";

export default class GamePlay extends Component {
  state = {
    score: 15,
    paused: false
  };

  onPause = () => {
    this.setState({ paused: !this.state.paused });
  };

  render() {
    return (
      <div className="container-fluid p-0" style={styles.wrapper}>
        <GameHeader
          score={this.state.score}
          onTimeOut={() => alert("Time Out")}
          paused={this.state.paused}
          onPause={this.onPause}
        />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "85%" }}
        >
          <FindThePairs />
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: "#FFEBD2",
    height: "100vh"
  }
};
