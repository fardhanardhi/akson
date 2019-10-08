import React, { Component } from "react";
import { Link } from "react-router-dom";

import colors from "../assets/colors";
import objects from "../assets/objects";

import GameHeader from "../components/GameHeader";
import FindThePairs from "../components/FindThePairs";
import ColorCodes from "../components/ColorCodes"
import PauseMenu from "../components/PauseMenu";

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
        
        
          <Link to="/Count-the-Object">Count Object</Link>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "85%" }}
        >
          <div className="row">
            <FindThePairs />
          </div>
          <div className="row">
            <ColorCodes />
          </div> 
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
