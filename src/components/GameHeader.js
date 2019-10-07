import React from "react";
import pauseIcon from "../assets/icons/pause.svg";
import medalIcon from "../assets/icons/medal.svg";
import stopwatchIcon from "../assets/icons/stopwatch.svg";

export default function GameHeader() {
  return (
    <div
      className="d-flex flex-wrap align-items-center pt-3 pb-3 pl-5 pr-5"
      style={styles.gameHeader}
    >
      <div className="col-auto">
        <div className="row">
          <img src={pauseIcon} alt="pause" className="mr-5" />
          <h2 style={styles.gameTitle}>Mencocokkan Objek</h2>
        </div>
      </div>
      <div className="col"></div>
      <div className="col-auto">
        <div className="row">
          <h2 style={styles.gameTitle} className="mr-2">
            10
          </h2>
          <img src={medalIcon} alt="medal" className="mr-4" />
          <h2 style={styles.gameTitle} className="mr-2">
            40
          </h2>
          <img src={stopwatchIcon} alt="stopwatch" className="mb-1" />
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
