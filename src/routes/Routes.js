import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Permainan from "../pages/Permainan";
import GamePlay from "../pages/GamePlay";
import Statistics from "../pages/Statistics";
import Menu from "../pages/Menu";
import FindThePairs from "../components/FindThePairs";
import CountObject from "../components/CountTheObject";
import ColorCodes from "../components/ColorCodes";
import ShapeAndPatteren from "../components/ShapeAndPattern";
import UserStat from "../components/UserStat";
import Usia from "../components/Usia";
import EditAkun from "../components/EditAkun";
import InputUmur from "../pages/InputUmur";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/input-umur">
            <InputUmur/>
          </Route> 
        <Route path="/usia">
            <Usia/>
          </Route>
          <Route path="/rubah-akun">
            <EditAkun />
          </Route>
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
          <Route path="/Color-Codes" >
            <ColorCodes/>
          </Route>
          <Route path="/Shape-and-Pattern" >
            <ShapeAndPatteren/>
          </Route>
          <Route path="/find-the-pairs" >
            <FindThePairs/>
          </Route>
          <Route path="/UserStat" >
            <UserStat/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
