import { Component } from "react";

/**
|--------------------------------------------------
| paused (bool)
| time (int)
| onTimeOut (fx)
|--------------------------------------------------
*/

export default class Countdown extends Component {
  state = {
    time: null
  };

  componentDidMount() {
    this.setState({ time: this.props.time }, () => this.startTick());
  }

  startTick = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.tick, 1000);
  };

  stopTick = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (!this.props.paused) {
      this.setState({ time: this.state.time - 1 });
    }
    if (this.state.time <= 0) {
      this.stopTick();
      this.props.onTimeOut();
    }
  };

  render() {
    return this.state.time;
  }
}
