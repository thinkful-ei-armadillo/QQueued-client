import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../Routes/LandingRoute/LandingRoute";
import Login from "../../Routes/LoginRoute/LoginRoute";
import Registration from "../../Routes/RegistrationRoute/RegistrationRoute";
import Header from "../Header/Header";
import NotFoundRoute from "../../Routes/NotFoundRoute/NotFoundRoute";
import WaitingRoom from "../../Routes/WaitingRoomRoute/WaitingRoom";
import MessageRoute from "../../Routes/MessageRoute/MessageRoute";
import MentorRoute from "../../Routes/MentorRoute/MentorRoute";
import StudentRoute from "../../Routes/StudentRoute/StudentRoute";
import StudentListRoute from "../../Routes/StudentListRoute/StudentListRoute";
import StudentDataRoute from "../../Routes/StudentDataRoute/StudentDataRoute";
import ChatRoute from "../../Routes/ChatRoute/ChatRoute";
import StudentHistoryRoute from '../../Routes/StudentHistory/StudentHistoryRoute'
import StudentInfoRoute from "../../Routes/StudentInfoRoute/StudentInfoRoute";
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';
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
            <MentorRoute path={"/waiting-room"} component={WaitingRoom} />
            <StudentRoute path={"/waiting-list"} component={StudentListRoute} />
            <StudentRoute path={"/student-history"} component={StudentHistoryRoute} />
            <MentorRoute path={ "/message" } component={ MessageRoute } />
            <MentorRoute path={ "/data/:studentName" } component={ StudentInfoRoute }/>
            <MentorRoute path={"/data"} component={StudentDataRoute} />
            <PrivateRoute path={ "/mentor/:mentorName" } component={ ChatRoute } />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
