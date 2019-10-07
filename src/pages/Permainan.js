import React, { Component } from "react";
import PauseMenu from "../components/PauseMenu";
import ExitGameConfirm from "../components/ExitGameConfirm";

export default class Permainan extends Component {
  render() {
    return (
         <div className="d-flex justify-content-center" style={styles}>
             <PauseMenu/>
             <ExitGameConfirm/>
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
