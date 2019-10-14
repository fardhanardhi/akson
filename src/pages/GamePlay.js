import React, { Component } from "react";
import { Link } from "react-router-dom";

import GameHeader from "../components/GameHeader";
import FindThePairs from "../components/FindThePairs";
import ShapeAndPattern from "../components/ShapeAndPattern";
import ColorCodes from "../components/ColorCodes";
import PauseMenu from "../components/PauseMenu";

export default class GamePlay extends Component {
  state = {
    score: 15,
    paused: false,

    game: null
  };

  onPause = () => {
    this.setState({ paused: true });
  };

  onPlay = () => {
    this.setState({ paused: false });
  };

  getGame = () => {
    let gameComponent;
    switch (this.state.game) {
      case "findThePairs":
        gameComponent = (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "85%" }}
          >
            <FindThePairs />
          </div>
        );
        break;
      case "shapeAndPattern":
        gameComponent = <ShapeAndPattern />;
        break;

      default:
        gameComponent = null;
        break;
    }
    return gameComponent;
  };

  onPause = () => {
    this.setState({ paused: !this.state.paused });
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
          <div className="text-center">
            <button
              className="btn btn-success btn-lg m-1"
              onClick={() => this.setState({ game: "findThePairs" })}
            >
              Find The Pairs
            </button>
            <button
              className="btn btn-success btn-lg m-1"
              onClick={() => this.setState({ game: "shapeAndPattern" })}
            >
              Shape And Pattern
            </button>
          </div>

          {this.getGame()}
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
