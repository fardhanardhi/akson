import React, { Component } from "react";
// import { Link } from "react-router-dom";

import GameHeader from "../components/GameHeader";
import FindThePairs from "../components/FindThePairs";
import PauseMenu from "../components/PauseMenu";

export default class GamePlay extends Component {
  state = {
    score: 15,
    paused: false,
    pauseModalShow: true
  };

  showPauseModal = () => {
    this.setState({ pauseModalShow: true });
  };

  hidePauseModal = () => {
    this.setState({ pauseModalShow: false });
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
          onPause={() => {
            this.onPause();
            this.showPauseModal();
          }}
        />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "85%" }}
        >
          <FindThePairs />
          <PauseMenu
            show={this.state.pauseModalShow}
            hide={this.hidePauseModal}
          />
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
