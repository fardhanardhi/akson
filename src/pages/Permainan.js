import React, { Component } from "react";
import PauseMenu from "../components/PauseMenu";
import ExitGameConfirm from "../components/ExitGameConfirm";

export default class Permainan extends Component {
  state = {
    pauseModalShow: true
  };

  showPauseModal = () => {
    this.setState({ pauseModalShow: true });
  };

  hidePauseModal = () => {
    this.setState({ pauseModalShow: false });
  };

  render() {
    return (
      <div className="d-flex justify-content-center" style={styles}>
        <button onClick={this.showPauseModal}>Show</button>
        <button onClick={this.hidePauseModal}>Hide</button>
        <PauseMenu
          show={this.state.pauseModalShow}
          hide={this.hidePauseModal}
        />
        <ExitGameConfirm />
      </div>
    );
  }
}

const styles = {
  // minHeight: '100%',
  minHeight: "100vh",
  display: "flex",
  alignItems: "center"
};
