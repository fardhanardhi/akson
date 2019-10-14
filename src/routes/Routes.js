import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Permainan from "../pages/Permainan";
import GamePlay from "../pages/GamePlay";
import Statistics from "../pages/Statistics";
import CountObject from "../components/CountTheObject";
import Menu from "../pages/Menu";
import FindThePairs from "../components/FindThePairs";

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
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/Count-the-Object" >
            <CountObject/>
          </Route>
          <Route path="/find-the-pairs" >
            <FindThePairs/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
