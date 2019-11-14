import React, { Component } from "react";

import Countdown from "../components/Countdown";

import pauseIcon from "../assets/icons/pause.svg";
import medalIcon from "../assets/icons/medal.svg";
import stopwatchIcon from "../assets/icons/stopwatch.svg";

import AppContext from "../context/AppContext";

/**
|--------------------------------------------------
| gameInfo {obj}
| paused (bool)
| onPause (fx)
| onTimeOut (fx)
|--------------------------------------------------
*/

class GameHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 5
    };
    this.countdownRef = React.createRef();
  }

  stopTick = () => {
    this.countdownRef.current.stopTick();
  };

  startTick = () => {
    this.countdownRef.current.startTick();
  };

  // state = { time: 10 };
  render() {
    console.log("game: ", this.props.gameInfo);
    console.log("paused?: ", this.props.paused);

    return (
      <div
        className="d-flex flex-wrap align-items-center pt-3 pb-3 pl-5 pr-5"
        style={styles.wrapper}
      >
        <div className="col-auto">
          <div className="row">
            <img
              src={pauseIcon}
              alt="pause"
              className="mr-5 aks-btn"
              onClick={() => {
                this.props.onPause();
                this.context.setTicked(false);
                // this.stopTick();
              }}
              style={styles.pauseBtn}
            />
            <h2 style={styles.text}>{this.props.gameInfo.name}</h2>
          </div>
        </div>
        <div className="col"></div>
        <div className="col-auto">
          <div className="row">
            <h2 style={styles.text} className="mr-2">
              {this.props.gameInfo.score}
            </h2>
            <img src={medalIcon} alt="medal" className="mr-4" />
            <h2 style={styles.text} className="mr-2">
              <Countdown
                time={this.props.gameInfo.totalTime}
                onTimeOut={this.props.onTimeOut}
                paused={this.props.paused}
                ref={this.countdownRef}
              />
            </h2>
            <img src={stopwatchIcon} alt="stopwatch" className="mb-1" />
          </div>
        </div>
        <button onClick={() => this.context.setTicked(!this.context.isTicked)}>
          pause/play
        </button>
        <button onClick={this.props.onTimeOut}>next</button>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: "#9BDBA1"
  },
  text: {
    fontFamily: "Carter One",
    color: "#fff",
    marginTop: "auto",
    marginBottom: "auto"
  },
  pauseBtn: {
    cursor: "pointer"
  }
};

GameHeader.contextType = AppContext;

export default GameHeader;
