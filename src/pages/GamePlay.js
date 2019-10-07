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
      <div className="container-fluid p-0">
        <GameHeader
          score={this.state.score}
          onTimeOut={() => alert("Time Out")}
          paused={this.state.paused}
          onPause={this.onPause}
        />

        <FindThePairs />
      </div>
    );
  }
}
