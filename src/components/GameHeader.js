import React from "react";
import pauseIcon from "../assets/icons/pause.svg";

export default function GameHeader() {
  return (
    <div
      className="d-flex flex-wrap align-items-center pt-3 pb-3 pl-5 pr-5"
      style={styles.gameHeader}
    >
      <div className="col-auto">
        <div className="row">
          <img src={pauseIcon} />
          <h2 style={styles.gameTitle}>Mencocokan Objek</h2>
        </div>
      </div>
      <div className="col"></div>
      <div className="col-auto">
        <div className="row">
          <img src={pauseIcon} />
          <h2 style={styles.gameTitle}>Mencocokan Objek</h2>
        </div>
      </div>
    </div>
  );
}

const styles = {
  gameHeader: {
    backgroundColor: "#9BDBA1"
  },
  gameTitle: {
    fontFamily: "Carter One",
    color: "#fff",
    marginTop: "auto",
    marginBottom: "auto"
  }
};
