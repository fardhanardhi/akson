import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/permainan">Permainan</Link>
            </li>
            <li>
              <Link to="/gameplay">GamePlay</Link>
            </li>
          </ul>
        </nav>
        <h2>Home</h2>
      </div>
    );
  }
}
