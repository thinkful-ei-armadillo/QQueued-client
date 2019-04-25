import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../routes/LandingRoute/LandingRoute";
import Login from "../../routes/LoginRoute/LoginRoute";
import Registration from "../../routes/RegistrationRoute/RegistrationRoute";
import Header from "../Header/Header";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import WaitingRoom from "../../routes/WaitingRoomRoute/WaitingRoom";
import StudentQueue from "../../routes/StudentDashboard/StudentQueue";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main role="main">
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route path={"/login"} component={Login} />
            <Route path={"/register"} component={Registration} />
            <Route path={"/waiting-room"} component={WaitingRoom} />
            <Route path={"/waiting-list"} component={StudentQueue} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
