import React, { Component } from "react";

import GameHeader from "../components/GameHeader";
import FindThePairs from "../components/FindThePairs";
import ColorCodes from "../components/ColorCodes";
import ShapeAndPattern from "../components/ShapeAndPattern";
import PauseMenu from "../components/PauseMenu";
import ExitGameCon from "../components/ExitGameConfirm";
import RestartGameCon from "../components/RestartGameConfirm";

export default class GamePlay extends Component {
  state = {
    score: 15,
    paused: false,
    exitDialogVisible: false,
    pauseDialogVisible: false,
    restartDialogVisible: false,

    game: null
  };

  onPause = () => {
    this.setState({ paused: true, pauseDialogVisible: true });
  };

  onExit = () => {
    this.setState({
      paused: true,
      exitDialogVisible: true,
      pauseDialogVisible: false
    });
  };

  onRestart = () => {
    this.setState({
      paused: true,
      restartDialogVisible: true,
      pauseDialogVisible: false
    });
  };

  onPlay = () => {
    this.setState({ paused: false, pauseDialogVisible: false });
  };

  onBack = () => {
    this.setState({
      paused: true,
      exitDialogVisible: false,
      pauseDialogVisible: true
    });
  };

  onBack2 = () => {
    this.setState({
      paused: true,
      restartDialogVisible: false,
      pauseDialogVisible: true
    });
  }

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
      case "colorCodes":
        gameComponent = (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "85%" }}
          >
            <ColorCodes />
          </div>
        );
        break;

      default:
        gameComponent = null;
        break;
    }
    return gameComponent;
  };

  render() {
    return (
      <div>
        <PauseMenu
          show={this.state.pauseDialogVisible}
          onPlay={this.onPlay}
          onExit={this.onExit}
          onRestart={this.onRestart}
        />
        <ExitGameCon show={this.state.exitDialogVisible} onBack={this.onBack} referensi="/Menu"/>
        <RestartGameCon show={this.state.restartDialogVisible} onBack={this.onBack2} />
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
            <button
              className="btn btn-success btn-lg m-1"
              onClick={() => this.setState({ game: "colorCodes" })}
            >
              Color Codes
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
