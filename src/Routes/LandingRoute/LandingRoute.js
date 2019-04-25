import React, { Component } from "react";
import "./LandingRoute.css";

export class LandingRoute extends Component {
  render() {
    return (
      <div className="landingPageContainer">
        <h2 className="welcome">Welcome to Git-Rekt</h2>
        <p className="landingDescription">
          This is your new tool to help deal with communication between students
          and mentors. This page is a visual queue, allowing mentors to be even
          more transparent with the students in the sense that the students will
          now know where the mentors are. If you're busy dealing with a student
          and aren't sure when you'll be able to get to the next one, this tool
          shows exactly that. It's the visual aide to show where everyone is
          occupying their time.
        </p>
        <p className="descriptionSignupLogin">
          To get started, sign up or log in!
        </p>
      </div>
    );
  }
}

export default LandingRoute;
