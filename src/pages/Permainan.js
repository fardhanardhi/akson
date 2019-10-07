import React, { Component } from "react";
import PauseMenu from "../components/PauseMenu";
import ExitGameConfirm from "../components/ExitGameConfirm";
import { Link } from "react-router-dom";

export default class Permainan extends Component {
  render() {
    return (
         <div className="d-flex justify-content-center" style={styles}>
             <Link to="/">Home</Link>
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
