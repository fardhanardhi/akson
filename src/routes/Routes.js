import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Permainan from "../pages/Permainan";
import GamePlay from "../pages/GamePlay";
import Menu from "../pages/Menu";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Menu">
            <Menu />
          </Route>
          <Route path="/gameplay">
            <GamePlay />
          </Route>
          <Route path="/permainan">
            <Permainan />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
