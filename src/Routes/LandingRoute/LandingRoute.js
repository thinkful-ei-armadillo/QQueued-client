import React, { Component } from "react";
import "./LandingRoute.css";
import ApiService from "../../services/api-service";

export class LandingRoute extends Component {
  handleQueue = () => {
    ApiService.getQueue().then(res => console.log(res));
  }
  render() {
    return (
      <div className="landingPageContainer">
        <h2 className="welcome">Welcome to Git-Rekt</h2>
        <p className="description">
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
        <input type='button' name='queue-btn' onClick={this.handleQueue} value='queue up'/>
      </div>
    );
  }
}

export default LandingRoute;
